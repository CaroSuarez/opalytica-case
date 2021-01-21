import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {db} from '../../../utils/Firebase';
import './form.scss'


const Form = () => {

  
    const [clientId, setClientId] = useState("");
    const [clientName, setClientName] = useState("");
    const [numberOfBottles, setNumberOfBottles] = useState("");

    console.log(clientId)
    console.log(clientName)
    console.log(numberOfBottles)    

    const loadOrder = (id, name, number, event) => {

        event.preventDefault();

        console.log('ejecutando el loadOrder')

        db.collection("orders").doc().set({
            clientId : id,
            clientName : name,
            numberOfBottles: number,
            startOrderDate : new Date().toLocaleString("es-CO"),
            stage : 'Pendiente'

        })
        .then(function() {

            setClientId("");
            setClientName("");
            setNumberOfBottles("");

            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });


    }

    

    
  return (
      
    <Fragment>


    <form className = 'newOrderForm'  >
      <input
        name = 'clientID'
        type="text"
        placeholder="Id Cliente"
        value={clientId}
        onChange={(e)=> setClientId(e.target.value)}
      />
      <input
        name = 'clientName'
        placeholder="Nombre Cliente"
        value={clientName}
        onChange={(e)=> setClientName(e.target.value)}
      />
      <input        
        name = 'numberOfBottles'
        type="number"
        placeholder="Cantidad de Botellas"
        value={numberOfBottles}
        onChange={(e)=> setNumberOfBottles(e.target.value)}
      />
    <div className = 'formButtonsContainer' >
    {/* <button id = 'formCancelButton'}>CANCEL</button> */}


    <Link className = 'cancelLinkForm' to = '/opciones'>
        <button className = 'cancelButtonForm'>
            CANCEL
        </button>
        </Link>
    <button id = 'formSubmitButton' type="submit" onClick= {(e)=>loadOrder(clientId, clientName, numberOfBottles, e)}>ENVIAR</button>
    
    </div>
   
    </form>
  </Fragment>



  )

  
};



export default Form;
