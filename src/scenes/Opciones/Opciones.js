import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./opciones.scss";

const Opciones = () => {
  return (
    <Fragment>
      <div className="containerOptions">
        <div className="plasticosLAOptions">
          <h1> PLÁSTICOS LA </h1>
        </div>

        <div className = 'optionsButtonsContainer' >

        <Button buttonClass = "optionButton" linkClass = 'linkOptions' linkTo = '/crear-nueva-orden' >CREAR NUEVA ORDEN</Button>
        <Button buttonClass = "optionButton" linkClass = 'linkOptions' linkTo = '/rastrear-ordenes' >RASTREAR ÓRDENES</Button>
        <Button buttonClass = "loginButton" linkClass = 'linkLogin' linkTo = '/login' >SALIR</Button>
      </div>
      </div>
    </Fragment>
  );
};

export default Opciones;
