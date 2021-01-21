import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './scenes/Login/Login';
import Opciones from './scenes/Opciones/Opciones';
import CreateNewOrder from './scenes/CreateNewOrder/CreateNewOrder';
import TrackOrders from './scenes/TrackOrders/TrackOrders';

function App() {
  return (
    <Router>       
        <Switch>         
          <Route path="/crear-nueva-orden" component = {CreateNewOrder}/>
          <Route path="/rastrear-ordenes" component = {TrackOrders}/>
          <Route path="/opciones" component = {Opciones} /> 
          <Route path="/login" component = {Login} />        
          <Route exact path="/" component = {Login} />
        </Switch>     
    </Router>
  );
}

export default App;
