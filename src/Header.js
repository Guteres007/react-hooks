import React from 'react';
import {
    Link
} from "react-router-dom";
import './App.css';


function Header() {
    return (
        <div>
            <Link to="/about">About</Link>
            <div>|</div>
            <Link to="/">Homepage</Link>
            <Link to="/todo">Todo</Link>
        </div>
    );
}

export default Header;
