import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './button.scss';


const Button = ({children, buttonClass, linkClass, linkTo}) => {

    return (
        <Link className = {linkClass} to = {linkTo}>
        <button className = {buttonClass}>
            {children}
        </button>
        </Link>
    )

}

export default Button;