import React, { Fragment, useState, useEffect } from "react";
import {db} from '../../../utils/Firebase';
import UseOrders from './UseOrders';
import Order from './Order';
import '../trackOrders.scss'

const OrdersList = () => {

  const ordersData = UseOrders();

  console.log(ordersData)

  

  return (
    <Fragment>
      <ul className="ulOrdersList">
        {ordersData.map((order) =>  
       
        
          
          

          <Order key = {order.orderId} id = {order.orderId} name = {order.data.clientName} stage = {order.data.stage} />
          
          
      )}
      </ul>
    </Fragment>
  )
    
    
  };
  
  export default OrdersList;