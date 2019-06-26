
import './App.css'
// import {Line, Pie, Bar} from 'react-chartjs-2';
// // import geneData from './App.json';


import React, {Component} from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import { BrowserRouter as Router, History as browserHistory} from 'react-router-dom'
// import { expression } from '@babel/template';

import HomePage from './components/HomePage'
import LogIn from './components/LogInPage'
import Table from './components/TableAndGraphs'
import App from '.'



export default class GUI extends Component{

    // look = () =>{
    //     return(
    //         <h1>H</h1>

    //     );
    // }
    render(){
        return(

            <div>
        

        <Table>
            
        </Table>
          


        

            {/* <Router>
              
              {/* <Switch> */}
            {/* <Route path = {"/table"}  component = {Table} />
            <Route path = {"/login"} component = {LogIn}  />
            <Route path = {"/homepage"} component = {HomePage}  /> */}
            


  


 
 
 



{/* <div style = {{position: "relative"}}>



                <a  href = "homepage" style = {{ float:"left", paddingLeft: "510px",  paddingTop: "20px" ,paddingBottom: "20px",  backgroundColor: "rgba(82, 190, 128, 0.8)", color: "white", fontSize: "20px"}}  >Home</a>
                <a href = "login" style = {{float: 'left', paddingLeft: "50px",  paddingTop: "20px" ,paddingBottom: "20px", backgroundColor: "rgba(82, 190, 128, 0.8)", color: "white",fontSize: "20px"}}>Log In</a>
                <a href= "table" style = {{float: 'left', paddingLeft: "50px", paddingRight: "620px", paddingTop: "20px" ,paddingBottom: "20px", backgroundColor: "rgba(82, 190, 128, 0.8)", color: "white",fontSize: "20px"}} >Table</a>
                
               

            </div>  

            
               
           
         </Router>
            */}



           

         </div>


        );
    }
}

