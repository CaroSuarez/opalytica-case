import React from 'react';
import Actions from './Actions'
import '../trackOrders.scss'





const Order = ({id, name, stage}) => {

    let backColor;
    if(stage == 'Pendiente'){backColor =  "#EF1010"};
    if(stage == 'En producción: Etapas 1 y 2'){backColor =  "#ECF015"};
    if(stage == 'En producción: Etapa 3'){backColor =  "#ECF015"};
    if(stage == 'Finalizado'){backColor =  "#22AA16"};

    
    return (
        <li className="orderItem" >
            <div className = 'orderDiv'
            style={{ backgroundColor: backColor }}
            
            > <span style={{ backgroundColor: backColor }}> {id} </span><span style={{ backgroundColor: backColor }}> {name}</span><span style={{ backgroundColor: backColor }}> {stage}  </span></div>
            <Actions orderStage = {stage}  identifier = {id}  />
        </li>


    )


}

export default Order;