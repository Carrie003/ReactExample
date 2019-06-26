import React, {Component} from 'react';
import { Route, Link, Switch, BrowserRouter} from 'react-router-dom';
// import {  browserHistory} from 'react-router';
import createBrowserHistory from 'history';
import { BrowserRouter as Router} from 'react-router-dom'
import Table from './TableAndGraphs'
export default class HomePage extends Component {

    render(){
        return(
            <div>
                Home
            </div> );
    }
}