import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Button from '../../components/Button/Button'
import './login.scss'

const Login = () =>{

    

    return (

        <Fragment>
        <div className = 'containerLogin' >
        <div className = 'plasticosLA' > <h1> PLÁSTICOS LA </h1></div>
        
            <input type="text" placeholder = "Usuario"/>
            <input type="password" placeholder = "Contraseña"/>

            <Button buttonClass = "loginButton" linkClass = 'linkLogin' linkTo = '/opciones' >ENTRAR</Button>           
        
        <div className = 'register' > <h1>  REGISTRARSE </h1></div>
        </div>
        
      </Fragment>
    )
}


export default Login;