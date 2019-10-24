import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import About from './About';
import Todo from './Todo';
import Homepage from './Homepage';

function Routes() {
    return (
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/todo" component={Todo}/>
            <Route path="/" component={Homepage}/>
        </Switch>
    );
}

export default Routes;

