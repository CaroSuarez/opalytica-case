import React, { Fragment } from "react";
import OrdersList from "./components/OrdersList";
import Button from '../../components/Button/Button';
import "./trackOrders.scss";
import "../Login/login.scss";

const TrackOrders = () => {
  return (
    <Fragment>
      <div className="containerTrackOrders">
        <div className="plasticosLAOptions">
          <h1> PLÁSTICOS LA </h1>
        </div>

        <OrdersList />

        <Button buttonClass = "volverButton" linkClass = 'linkVolver' linkTo = '/opciones'>Volver</Button>
      </div>
    </Fragment>
  );
};

export default TrackOrders;
