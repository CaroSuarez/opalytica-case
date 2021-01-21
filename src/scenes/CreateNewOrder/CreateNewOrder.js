import React, { Fragment, useState, useEffect } from "react";
import Form from './components/Form';
import './createNewOrder.scss'




const CreateNewOrder = () => {

  
   
    
  return (
      <Fragment>

          <div className = 'contanerCreateNewOrders' >
          <div className = 'plasticosLA' > <h1> PLÁSTICOS LA </h1></div>
          <div  className = 'createNewOrderText' ><p >Ingrese la información a continuación para crear una nueva orden</p></div>  
        

          <Form />
          
          </div>

         
          
      </Fragment>



  )

  
};



export default CreateNewOrder;