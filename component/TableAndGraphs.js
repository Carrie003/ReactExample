
// import './App.css'
import {Line, Pie, Bar} from 'react-chartjs-2';
import geneData from './App.json';

import React, {Component} from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { expression } from '@babel/template';



export default class TableAndGraph extends Component{

    constructor(props){
        super(props);
        this.state = {
          

            username: "",
            password: "",

            users: ['a'],

            // a: "2",

            options:
                ['time_stamp', 'window_id', 'avg_cnv_ratio node', 
                'avg_bowtie_bwa_ratio', 'bb_std', 'cnv_ratio_std', 'cov_std', 'avg_cov', 'avg_dup_ratio', 'gc_perc',
                'allele_freq','read_stats','is_training','het_classification'
            ],
            

            option :
            ['time_stamp', 'window_id', 'avg_cnv_ratio', 
            'avg_bowtie_bwa_ratio', 'bb_std', 'cnv_ratio_std', 'cov_std', 'avg_cov', 'avg_dup_ratio', 'gc_perc',
            'allele_freq','read_stats','is_training','het_classification'
        ],

            keyWord :
            '',

            list:
            [0,1,2,3,4,5,6,7,8,9,10],

            myData: geneData,



       data:{
           
           labels:[],
           datasets:[{
               label: "",
               data:[]
           },
        //    {
        //     label : "data2",
        //     data:[1,2,3,4,5]
 
        // }
    ],
      
       },

       dataInitial:{
           
        labels:[],
        datasets:[{
            label: "",
            data:[]
        },
     //    {
     //     label : "data2",
     //     data:[1,2,3,4,5]

     // }
 ],
   
    },


    //    request: require('express'),
    //    cors: require('cors'),
    //    mysql: require('mysql'),
    //    app : express(),
    //    SELECT_ALL_PRODUCTS_QUERY : 'SELECT * FROM classified_het_data',
    //    connection  : mysql.createConnection({
    //        host: 'localhost',
    //        user: 'carrieshao',
    //        password: 'Hadoop2019',
    //        database: 'react_sql'

    //    }),

       

       






       dataAll:{
        labels:[],
        datasets:[
        
        {
            label: "avg_cnv_ratio",
            data:[]
        },
        {
            label: "avg_bowtie_bwa_ratio",
            data:[]
        },
        {
            label: "bb_std",
            data:[]
        },
        {
            label: "cnv_ratio_std",
            data:[]
        },
        {
            label:"cov_std",
            data:[]
        },
        {
            label: "avg_cov",
            data:[]
        },
        {
            label: "avg_dup_ratio",
            data:[]
        },
        {
            label: "gc_perc",
            data:[]
        },
        {
            label: "allele_freq",
            data:[]
        },
        {
            label: "read_stats",
            data:[]
        },
        {
            label: "is_training",
            data:[]
        },
        // {
        //     label: "het_classification",
        //     data:[]
        // },
       ]},

       color: ["rgba(0,0,0,1)"]

    }
}


    
   

// router.post('/new', function(req, res, next) {
//     res.locals.connection.query('insert into members(name,email) values(''+req.body.name+'',''+req.body.email+'')', function (error, results, fields) {
//         if(error) throw error;
//         res.send(JSON.stringify(results));
//     });
// });

    
    // connectData = () => {
    //     const express = require('express');
    // //  const bodyParser = require('bodyParser');
    //    const mysql      = require('mysql');
    //    const app = express();
    //    const SELECT_ALL_PRODUCTS_QUERY = 'SELECT * FROM classified_het_data';
    //    const connection  = mysql.createConnection({
    //        host: 'localhost',
    //        user: 'carrieshao',
    //        password: 'Hadoop2019',
    //        database: 'react_sql'

    //    });

       
    //     connection.connect(err => {
    //         if(err){
    //             return err;
    //         }
    //     });
    //     // app.use(bodyParser());
    //     app.get('/', (res, err) => {
    //         connection.query(SELECT_ALL_PRODUCTS_QUERY, (err, result) => {
    //             if(err) {
    //                 return res.send(err);
    //             }
    //             else{
    //                 return res.json({
    //                     myData: result
    //                 })
    //             }
    //         })
    //     })
    // }
    handleInputChange = (e)=>{
        
        this.setState({keyWord: e.target.value});


    }

    handleOptionChange = (e) =>{
   
        this.setState ({ option: [e.target.value]});
        
    

    }

    displayFullTable  = () =>{
        

        this.setState({option : this.state.options});

    }

    manageData = () =>{
        // this.connectData();

        // if(this.state.option != this.state.options){
        this.state.myData.map((data) => {
            if(!this.state.data.labels.includes(data.gene)){
                this.state.data.labels.push(data.gene);
                // this.state.dataAll.labels.push(data.gene);

            }
    
        })
    //    }
    
    // else{
    //     this.state.myData.map((data) => {
    //         if(!this.state.dataAll.labels.includes(data.gene)){
    //             // this.state.data.labels.push(data.gene);
    //             this.state.dataAll.labels.push(data.gene);

    //         }
    
    //     })
    // }

        
            if(this.state.option == 'avg_cnv_ratio '){
            this.state.data = this.state.dataInitial;
            this.state.data.datasets[0].data = [];
            this.state.color = ["rgba(203, 67, 53 , 0.7)"]
                this.state.data.datasets[0].label = "avg_cnv_ratio";
                this.state.data.labels.map((geneType) =>{
                    var sum = 0;
                    var number = 0;
                    var average= 0;
                    this.state.myData.map((data)=>{
                        if(data.gene === geneType){
                            sum += data.avg_cnv_ratio;
                            number +=1;

                        }
                        
                    })
                    average = sum/number;
                    this.state.data.datasets[0].data.push(average);

                })
                // this.state.myData.map((data) =>{
                
                //     this.state.data.datasets[0].data.push(data.avg_cnv_ratio);

                // });


                }
        else if(this.state.option == 'avg_bowtie_bwa_ratio '){
            
            this.state.data = this.state.dataInitial;
            this.state.data.datasets[0].data = [];
                    this.state.color = ["rgba(214, 137, 16, 0.7)"];
                    this.state.data.datasets[0].label = "avg_bowtie_bwa_ratio";
                    this.state.data.labels.map((geneType) =>{
                        var sum = 0;
                        var number = 0;
                        var average=0 ;
                        this.state.myData.map((data)=>{
    
                            if(data.gene === geneType){
                               
                                sum += data.avg_bowtie_bwa_ratio;
                                number +=1;
    
                            }
                            
                        })
                        average = sum/number;
                        this.state.data.datasets[0].data.push(average);
    
                    })
                }
        
                  
        else if(this.state.option == 'bb_std '){
        
            this.state.data = this.state.dataInitial;
            this.state.data.datasets[0].data = [];
            this.state.color = ["rgba(52, 73, 94  , 0.7)"];
           
                        this.state.data.datasets[0].label = "bb_std";
                        this.state.data.labels.map((geneType) =>{
                            var sum = 0;
                            var number = 0;
                            var average =0 ;
                            this.state.myData.map((data)=>{
        
                                if(data.gene === geneType){
                                   
                                    sum += data.bb_std;
                                    number +=1;
        
        
                                }
                                
                            })
                            average = sum/number;
                            this.state.data.datasets[0].data.push(average);
        
                        })
                        }
        else if(this.state.option == 'cnv_ratio_std '){
        
                            this.state.data = this.state.dataInitial;
                            this.state.data.datasets[0].data = [];
                            this.state.color = ["rgba(22, 160, 133  , 0.7)"];
                           
                                        this.state.data.datasets[0].label = "cnv_ratio_std";
                                        this.state.data.labels.map((geneType) =>{
                                            var sum = 0;
                                            var number = 0;
                                            var average=0;
                                            this.state.myData.map((data)=>{
                        
                                                if(data.gene === geneType){
                                                   
                                                    sum += data.cnv_ratio_std;
                                                    number +=1;
                        
                        
                                                }
                                                
                                            })
                                            average = sum/number;
                                            this.state.data.datasets[0].data.push(average);
                        
                                        })
                                        }
        else if(this.state.option == 'cov_std '){
        
            this.state.data = this.state.dataInitial;
            this.state.data.datasets[0].data = [];
           this.state.color = ["rgba(149, 165, 166  , 0.7)"];
                                           
            this.state.data.datasets[0].label = "cov_std";
            this.state.data.labels.map((geneType) =>{
                var sum = 0;
                var number = 0;
                var average=0;
                this.state.myData.map((data)=>{

                    if(data.gene === geneType){
                       
                        sum += data.cov_std;
                        number +=1;


                    }
                    
                })
                average = sum/number;
                this.state.data.datasets[0].data.push(average);

            })
                                                        }


    else if(this.state.option == 'avg_cov '){
        
    this.state.data = this.state.dataInitial;
    this.state.data.datasets[0].data = [];
    this.state.color = ["rgba(52, 152, 219  , 0.7)"];
                                                                                           
    this.state.data.datasets[0].label = "avg_cov";
    this.state.data.labels.map((geneType) =>{
        var sum = 0;
        var number = 0;
        var average =0 ;
        this.state.myData.map((data)=>{

            if(data.gene === geneType){
               
                sum += data.avg_cov;
                
                number+=1;


            }
            
        })
        average = sum/number;
        this.state.data.datasets[0].data.push(average);

    })
                
    
                                    }
    else if(this.state.option == 'avg_dup_ratio '){
        
    this.state.data = this.state.dataInitial;
    this.state.data.datasets[0].data = [];
    this.state.color = ["rgba(211, 84, 0, 0.7)"];
                                                                                                                                           
   this.state.data.datasets[0].label = "avg_dup_ratio";
   this.state.data.labels.map((geneType) =>{
    var sum = 0;
    var number = 0;
    var average =0 ;
    this.state.myData.map((data)=>{

        if(data.gene === geneType){
           
            sum += data.avg_dup_ratio;
            number+=1;


        }
        
    })
    average = sum/number;
    this.state.data.datasets[0].data.push(average);

})
    }
    else if(this.state.option == 'gc_perc '){
        
        this.state.data = this.state.dataInitial;
        this.state.data.datasets[0].data = [];
       this.state.color = ["rgba(142, 68, 173  , 0.7)"];
                                       
        this.state.data.datasets[0].label = "gc_perc";
        this.state.data.labels.map((geneType) =>{
            var sum = 0;
            var number = 0;
            var average =0;
            this.state.myData.map((data)=>{

                if(data.gene === geneType){
                   
                    sum += data.gc_perc;

                    number+=1;


                }
                
            })
            average = sum/number;
            this.state.data.datasets[0].data.push(average);

        })
                                                    }

                                                                                                                                                                                                                                                       
          else if(this.state.option == 'allele_freq '){
        
        this.state.data = this.state.dataInitial;
        this.state.data.datasets[0].data = [];
       this.state.color = ["rgba(39, 174, 96  , 0.7)"];
                                       
        this.state.data.datasets[0].label = "allele_freq";
        this.state.data.labels.map((geneType) =>{
            var sum = 0;
            var number = 0;
            var average= 0;
            this.state.myData.map((data)=>{

                if(data.gene === geneType){
                   
                    sum += data.allele_freq;
                    number+=1;


                }
                
            })
            average = sum/number;
            this.state.data.datasets[0].data.push(average);

        })
        } 
        
        else if(this.state.option == 'read_stats'){
        
            this.state.data = this.state.dataInitial;
            this.state.data.datasets[0].data = [];
           this.state.color = ["rgba(236, 64, 122, 0.7)"];
                                           
            this.state.data.datasets[0].label = "read_stats";
            this.state.data.labels.map((geneType) =>{
                var sum = 0;
                var number = 0;
                var average = 0;
                this.state.myData.map((data)=>{

                    if(data.gene === geneType){
                       
                        sum += data.read_stats;
                        number+=1;


                    }
                    
                })
                average = sum/number;
                this.state.data.datasets[0].data.push(average);

            })
            }
            
        else if(this.state.option == 'is_training '){
        
                this.state.data = this.state.dataInitial;
                this.state.data.datasets[0].data = [];
               this.state.color = ["rgba(241, 196, 15, 0.7)"];
                                               
                this.state.data.datasets[0].label = "read_stats";
                this.state.data.labels.map((geneType) =>{
                    var sum = 0;
                    var number = 0;
                    var average = 0;
                    this.state.myData.map((data)=>{

                        if(data.gene === geneType){
                           
                            sum += data.is_training;
                            number+=1;
                            


                        }
                        
                    })
                    average = sum/number;
                    this.state.data.datasets[0].data.push(average);

                })
                } 
                                                    
                                                                                           
        else if(this.state.option == this.state.options){
                
                this.state.color = ["rgba(203, 67, 53 , 0.7)", "rgba(214, 137, 16, 0.7)" , "rgba(52, 73, 94  , 0.7)", "rgba(22, 160, 133  , 0.7)", "rgba(149, 165, 166  , 0.7)", "rgba(52, 152, 219  , 0.7)", "rgba(211, 84, 0, 0.7)", "rgba(142, 68, 173  , 0.7)", "rgba(39, 174, 96  , 0.7)", "rgba(236, 64, 122, 0.7)", "rgba(241, 196, 15, 0.7)"];
                            
                                        this.state.data = this.state.dataAll;

                                        this.state.list.map((l) =>{
                                            this.state.data.datasets[l].data = [];

                                        });
        
                                        // this.state.data.datasets[0].data = [];
                                        // this.state.data.datasets[1].data = [];
                                        // this.state.data.datasets[2].data = [];
                                        // this.state.data.datasets[3].data = [];
                                        // this.state.data.datasets[4].data = [];
                                        // this.state.data.datasets[5].data = [];
                                        // this.state.data.datasets[6].data = [];
                                        // this.state.data.datasets[7].data = [];
                                        // this.state.data.datasets[8].data = [];
                                        // this.state.data.datasets[9].data = [];
                                        // this.state.data.datasets[10].data = [];
                                        
                                        
                                        this.state.data.labels.map((geneType) =>{
                                           

                                            var sum0  = 0;
                                           var sum1  = 0;
                                            var sum2  = 0;
                                            var sum3  = 0;
                                            var sum4  = 0;
                                        var sum5  = 0;
                                        var sum6  = 0;
                                        var sum7  = 0;
                                        var sum8  = 0;
                                        var sum9  = 0;
                                        var sum10  = 0;
                                           var number = 0;
                                        var average0  = 0; 
                                            var average1  = 0;
                                            var average2  = 0; 
                                            var average3  = 0;
                                            var average4  = 0;
                                            var average5  = 0;
                                            var average6  = 0; 
                                            var average7  = 0;
                                            var average8  = 0;
                                            var average9  = 0;
                                            var average10  = 0; 
                                           

                                            this.state.myData.map((data)=>{
                        
                                                if(data.gene === geneType){
                                                   

                                                    sum0 += data.avg_cnv_ratio;
                                                    sum1 += data.avg_bowtie_bwa_ratio;
                                                    sum2 += data.bb_std;
                                                    sum3 += data.cnv_ratio_std;
                                                    sum4 += data.cov_std;
                                                    sum5 += data.avg_cov;
                                                    sum6 += data.avg_dup_ratio;
                                                    sum7 += data.gc_perc;
                                                    sum8 += data.allele_freq;
                                                    sum9 += data.read_stats;
                                                    sum10 += data.is_training;
                                                   
                                                    number+=1;
                                                    
                        
                        
                                                }
                                                
                                            })
                                            average0 = sum0/number;
                                            average1 = sum1/number;
                                            average2 = sum2/number;
                                            average3 = sum3/number;
                                            average4 = sum4/number;
                                            average5 = sum5/number;
                                            average6 = sum6/number;
                                            average7 = sum7/number;
                                            average8 = sum8/number;
                                            average9 = sum9/number;
                                            average10 = sum10/number;
                                            this.state.data.datasets[0].data.push(average0);
                                            this.state.data.datasets[1].data.push(average1);
                                            this.state.data.datasets[2].data.push(average2);
                                            this.state.data.datasets[3].data.push(average3);
                                            this.state.data.datasets[4].data.push(average4);
                                            this.state.data.datasets[5].data.push(average5);
                                            this.state.data.datasets[6].data.push(average6);
                                            this.state.data.datasets[7].data.push(average7);
                                            this.state.data.datasets[8].data.push(average8);
                                            this.state.data.datasets[9].data.push(average9);
                                            this.state.data.datasets[10].data.push(average10);

                        
                                        })
                                        // this.state.myData.map((data) =>{


                                        //     this.state.data.datasets[0].data.push(data.avg_cnv_ratio);
                                        //     this.state.data.datasets[1].data.push(data.avg_bowtie_bwa_ratio);
                                        //     this.state.data.datasets[2].data.push(data.bb_std);
                                        //     this.state.data.datasets[3].data.push(data.cnv_ratio_std);
                                        //     this.state.data.datasets[4].data.push(data.cov_std);
                                        //     this.state.data.datasets[5].data.push(data.avg_cov);
                                        //     this.state.data.datasets[6].data.push(data.avg_dup_ratio);
                                        //     this.state.data.datasets[7].data.push(data.gc_perc);
                                        //     this.state.data.datasets[8].data.push(data.allele_freq);
                                        //     this.state.data.datasets[9].data.push(data.read_stats);
                                        //     this.state.data.datasets[10].data.push(data.is_training);
                                
                                        // });
                                      
                                        }

       

          
        
                
    }


   colorData = ()=> { 
       this.manageData();

       const data = this.state.data;

       if(data.datasets){
           this.state.data.datasets.map((set,i) => {

               set.backgroundColor = this.state.color[i];
               set.borderColor = "white";
               set.borderWidth = 1;
           });
       }
       return data;

   }



   render (){
       return(
           <div style = {{position: "relative", width: 600, height: 600 }}>
          
 <div>

{/* <div style ={{ boxSizing:"border-box", borderRadius: "3px", backgroundColor: "rgba(39, 174, 96,0.2)", width: "400px", boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)", fontFamily: "Ariel"}}>
     <form style ={{textAlign: "center", padding: "20px 20px"}}>
         <div>
         <h3>
             Log In
         </h3>
         </div>
         <div>
         Username:
         <input type = "username" placeholder = "Username" style = {{border:"hidden", marginTop: "3px", borderRadius: "2px", height: "20px", backgroundColor: "rgba(204, 209, 209,0.8)"}}  >
         </input>
         </div>
         <div>
             Password:
         <input type = "password" placeholder = "Password" style = {{border:"hidden", marginTop: "5px", borderRadius:"2px", height: "20px", backgroundColor: "rgba(204, 209, 209,0.8)" }}>
         </input></div>

         <button style = {{ boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)" , textAlign: "center", width: "100px" , backgroundColor: "#F9E79F", padding: "5px 6px", borderRadius: "6px", fontSize: "12px", marginTop: "5px", border: "hidden"}}>
             Sign In
         </button>
         
     </form>
     </div>   */}


    {/* <div  style = {{textAlign:"center" , fontSize: "20px"}}>
        Please upload your data here:
 <div> 
<button  style ={{boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",position:'relative',  backgroundColor : "rgba(133, 193, 233, 0.2)" ,border: "hidden", width: "150px", height: "30px", borderRadius: "15px", fontSize: "15px"}} onClick = {() => this.createTable()}>
                  Upload Data
              </button>
              </div>  
              </div> */}
              </div>
              



              <div style = {{textAlign:"center", fontSize: "20px" }}>
                  Click here to see the full table:
                  <div>
                  <div>
                  <button style = {{boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",position: "relative", backgroundColor: "rgba(133, 193, 233, 0.3 )", borderRadius: "15px", padding: "5px", border:"hidden", width: "150px", height: "30px", fontSize: "15px"}} onClick = {() => this.displayFullTable()}> 
                 
                  View Full Table
                  
                  </button>
                  </div>
                  </div> 
                  </div>
<div style = {{textAlign:"center" , fontSize: "20px"}}>
<div >
Please select the data type in which you want to search for:
</div>
              <select onChange ={ e => this.handleOptionChange(e)} value = {this.state.option} style ={{backgroundColor: "rgba(196, 155, 211  ,0.4)", width: "150px", height: "30px", textAlign: "center", fontSize : "15px", border: "hidden", boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)"}}>
                  
                  
                <option value = 'time_stamp '> time_stamp  </option>
                <option value = 'window_id '> window_id  </option>
                
                  <option value = 'avg_cnv_ratio '> avg_cnv_ratio  </option>
                  <option value = 'avg_bowtie_bwa_ratio '> avg_bowtie_bwa_ratio </option>
                  <option value = 'bb_std '> bb_std </option>
                  
                  <option value = 'cnv_ratio_std '> cnv_ratio_std </option>
                  <option value = 'cov_std '> cov_std </option>
                  <option value = 'avg_cov '> avg_cov </option>
                  <option value = 'avg_dup_ratio '> avg_dup_ratio  </option>
                  <option value = 'gc_perc '> gc_perc </option>
                  <option value = 'allele_freq '> allele_freq </option>
                  <option value = 'read_stats '> read_stats </option>
                  <option value = 'is_training '> is_training </option>
                  <option value = 'het_classification '> het_classification </option>
                  
                  


              </select>


              </div>
              <div style = {{textAlign:"center", fontSize: "20px" }}>
                  Search for rows of paritcular gene type or value of the above datatype:

              </div>
              <div style = {{textAlign:"center"  }}>
              <input
              type = "username"
              placeholder = "value/genetype here"
              onChange  = {e => this.handleInputChange(e)}
              style ={{fontSize: "15px"}}
              />
              </div>

              <div style = {{textAlign: "center"}}>
              <table id = "table" style = {{}}>
                             <thead>
                            
                             <tr>
                                 <th>
                                     username
                                 </th>
                                 <th>
                                     sample
                                 </th>
                                 <th>
                                     control
                                 </th>
                                 <th>
                                     gene
                                 </th>
   
                                
                 {
                   
                     this.state.option.map((option) => {
                         
                       
                         return (
                                 <th>
                                     {option}
                                 </th>
                         );
                        
                     }
                    
                      )
                      
                 }
                 </tr>
                 
                 </thead> 


                 <tbody>
                    
                 

                     {

                         this.state.myData.map((data) =>{
                             
                             if(this.state.option == 'time_stamp ' && (data.time_stamp.includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) )){
                                 
                                // this.setState({option : this.state.options});
                                 return (

                                      
                                     <tr>
                                        
                                         <td>

                                            
                                           {data.username}
                                        </td>
                                         <td>    
                                         {data.sample}
                                       </td>
                                       <td>    
                                         {data.control}
                                       </td>
                                       <td>    
                                         {data.gene}
                                       </td>
                              <td>

                                         {data.time_stamp}

                                         </td>
                                         
                                         </tr>);



                             }
                             else if(this.state.keyWord === ''){
                                 if(this.state.option == 'time_stamp '){
                                    
                                    return(

                                        
                                        // <table>
                                        
                                        //     <thead>
                                        //     <tr>
                                             
                                        //          <th>
                                        //              variable
                                        //          </th>
                                        //          <th>
                                        //              data1
                                        //          </th>
                                        //          <th>
                                        //              data2
                                        //          </th>
                                        //          <th>
                                        //              data3
                                        //          </th>
                                        //          <th>
                                        //              data4
                                        //          </th>
                                        //          </tr>
                                        //          </thead>

                                                //  <tbody>
                                                 <tr>
                                                  <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                                            

                                            <td>

                                        {data.time_stamp}
                                        
                                        </td>
                                        </tr>
                                        // </tbody>
                                        
                                        // </table>
                                        );
                                 }

                                 

                                 }
                            //      else if(this.state.option == 'data1 ' && data.data1 != this.state.keyWord){
                                
                            //         // this.setState({option : this.state.options});
                                    
                            //         // return(
                            //         // // <div>
                            //         // //     No Matched Data Found
                            //         // //     </div>
                                        

                            //         // );

                            // }

                         }
                         )


                        
                        
                     }
                     {


this.state.myData.map((data) =>{
                             

    if(this.state.option == 'window_id ' &&  (data.window_id.includes( this.state.keyWord) || data.gene.includes(this.state.keyWord) ) ){
        return (

           
            <tr>
                 <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
            <td>
                {data.window_id}
                </td>
                </tr>
                );





    }
    else if(this.state.keyWord === ''){
        if(this.state.option == 'window_id '){
           return(
               <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                   

                   <td>

               {data.window_id}
               </td>
               </tr>);
        }
       


   }


}
)


                     }
                    
                    {
                        this.state.myData.map((data) =>{
                             
                            if(this.state.option == 'avg_cnv_ratio ' && (data.avg_cnv_ratio.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) )){
                                
                                return (
                                    <tr>
                                         <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>

                                    <td>
                                        {data.avg_cnv_ratio}
                                        </td>
                                        </tr>);
                        
                        
                        
                            }
                            else if(this.state.keyWord === ''){
                                if(this.state.option == 'avg_cnv_ratio '){
                                   return(
                                       <tr>
                                          <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                                           <td>
                        
                                       {data.avg_cnv_ratio}
                                       </td>
                                       </tr>);
                                }

                               
                               
                        
                        
                           }
                         

                        
                        }
                        
                        )
                    }
                                          

{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'avg_bowtie_bwa_ratio ' && (data.avg_bowtie_bwa_ratio.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord)) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.avg_bowtie_bwa_ratio}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'avg_bowtie_bwa_ratio '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.avg_bowtie_bwa_ratio}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )

   
}


{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'bb_std ' && (data.bb_std.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) ) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.bb_std}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'bb_std '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.bb_std}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}
{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'cnv_ratio_std ' && (data.cnv_ratio_std.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord)  )){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.cnv_ratio_std}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'cnv_ratio_std '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.cnv_ratio_std}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}
{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'cov_std ' && (data.cov_std.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) ) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.cov_std}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'cov_std '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.cov_std}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}

{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'avg_cov ' && (data.avg_cov.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) ) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.avg_cov}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'avg_cov '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.avg_cov}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}


{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'avg_dup_ratio ' && (data.avg_dup_ratio.toString().includes(this.state.keyWord)  || data.gene.includes(this.state.keyWord) ) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.avg_dup_ratio}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'avg_dup_ratio '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.avg_dup_ratio}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}

{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'gc_perc ' && (data.gc_perc.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord)  ) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.gc_perc}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'gc_perc '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.gc_perc}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}

{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'allele_freq ' && (data.allele_freq.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) )  ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.allele_freq}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'allele_freq '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.allele_freq}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}
{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'read_stats ' && (data.read_stats.toString().includes(this.state.keyWord) || data.gene.includes(this.state.keyWord) )){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.read_stats}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'read_stats '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.read_stats}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}

{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'is_training ' && (data.is_training.toString().includes(this.state.keyWord)  || data.gene.includes(this.state.keyWord) ) ){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.is_training}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'is_training '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.is_training}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}

{
    this.state.myData.map((data) =>{
         
        if(this.state.option == 'het_classification ' && (data.het_classification.toString().includes(this.state.keyWord)  || data.gene.includes(this.state.keyWord) )){
            
            return (
                <tr>
                    <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
                <td>
                    {data.is_training}
                    </td>
                    </tr>);
    
    
    
        }
        else if(this.state.keyWord === ''){
            if(this.state.option == 'het_classification '){
               return(
                   <tr>
                     <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>
    
                       <td>
    
                   {data.het_classification}
                   </td>
                   </tr>);
            }
           
    
    
       }
      
    }
    )
 
}


    {

        this.state.myData.map((data) => {
            if(this.state.option == this.state.options && this.state.keyWord =="" ){
                return(
                <tr>
                                        
                                        <td>

                                            
{data.username}
</td>
<td>    
{data.sample}
</td>
<td>    
{data.control}
</td>
<td>    
{data.gene}
</td>


     <td>

                {data.time_stamp}

                </td>
                <td>

                {data.window_id}

                </td>
                <td>

                {data.avg_cnv_ratio}

                </td>
                <td>

                {data.avg_bowtie_bwa_ratio}

                </td>

                <td>

{data.bb_std}

</td>

<td>

{data.cnv_ratio_std}

</td>

<td>

{data.avg_bowtie_bwa_ratio}

</td>

<td>

{data.cov_std}

</td>

<td>

{data.avg_cov}

</td>
<td>

{data.avg_dup_ratio}

</td>
<td>

{data.gc_perc}

</td>

<td>

{data.allele_freq}

</td>

<td>

{data.read_stats}

</td>
<td>

{data.is_training}

</td>

<td>

{data.het_classification}

</td>







                
                </tr>
                );

            }
                

        })
    }                                           
                                  
                                      



             
                 </tbody>
      </table>
      <div>
          ---------------------------------------------------------------------------------------------------------
      </div>


      <div style = {{textAlign: "center"}}>
                  <label style = {{boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",position: "relative", backgroundColor: "rgba(230, 176, 170, 0.3 )", borderRadius: "7px", padding: "5px", border:"hidden", width: "150px", height: "30px", fontSize: "15px"}}>
                      Bar Graph
                  </label>

              </div>
      </div> 
      <Bar
                options = {{respoinsive:true}}

                data = {this.colorData()}

            /> 
      <div>

    <div style = {{textAlign: "center"}}>
    <label style = {{ boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",position: "relative", backgroundColor: "rgba(120, 144, 156, 0.3 )", borderRadius: "7px", padding: "5px", border:"hidden", width: "150px", height: "30px", fontSize: "15px"}}>
                      Line Graph
                  </label>
          
      </div>

      </div>
    <div> 

{/*         
           { Chart.Line({
                
                data: this.getBarData(["rgba(10,20,30,0.75)", "rgba(10,20,30,0.75)"])

            })
           } */}
        <Line
                options = {{respoinsive:true}}
                data = {this.colorData()}

            />


      </div> 
     

      
      
      
            <div>
            <div style = {{textAlign: "center"}}>
<label style = {{boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)",position: "relative", backgroundColor: "rgba(169, 50, 38, 0.3 )", borderRadius: "7px", padding: "5px", border:"hidden", width: "150px", height: "30px", fontSize: "15px"}} >
    Pie Chart
</label>

  <Pie

options = {{respoinsive:true}}

data = {this.colorData()}

/>  
</div>
</div>

{/* <Router> */}
    {/* <Route path="/hi" >

    </Route> */}

    {/* {browserHistory.push("hi")} */}
{/* </Router> */}
     </div>





       );
                }
            

      
       
   
            }        
                                
                                

