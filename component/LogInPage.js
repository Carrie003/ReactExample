
import React, {Component} from 'react';
import { Route, Link, Switch, BrowserRouter} from 'react-router-dom';
// import {  browserHistory} from 'react-router';
import createBrowserHistory from 'history';
import { BrowserRouter as Router} from 'react-router-dom'
import Table from './TableAndGraphs'
export default class LogIn extends Component{


    
    // logInButtonClick = () =>{
    //    BrowserRouter.push("/table");
    // }
    render(){

        return(
        <div style ={{ boxSizing:"border-box", borderRadius: "3px", backgroundColor: "rgba(39, 174, 96,0.2)", width: "400px", boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)", fontFamily: "Ariel"}}>
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
         </input>
         <div>

        <Router>
        <Route path = {"/table"}  component = {Table} />
        <Link to = "/table">
         <button  style = {{ boxShadow: "0 5px 6px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19)" , textAlign: "center", width: "100px" , backgroundColor: "#F9E79F", padding: "5px 6px", borderRadius: "6px", fontSize: "12px", marginTop: "5px", border: "hidden"}}>
                 Sign In
             </button>
             </Link>
             </Router>
             </div>
             
         </div> 

      
            
        
         
    </form>
      </div>   
        );

    }

}