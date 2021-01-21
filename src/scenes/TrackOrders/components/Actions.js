import React from "react";
import { db } from "../../../utils/Firebase";

const Actions = (props) => {
  console.log(props.orderStage);
  console.log(props.identifier);

  const changeStage1 = (orderIdentifier, currentStage, newStage) => {
    db.collection("orders")
      .doc(orderIdentifier)
      .update({
        stage: newStage,
        production_starts_date: new Date().toLocaleString("es-CO"),
      })
      .then(() => {
        console.log("updated the state to" + newStage);
      });
  };


  const changeStage2 = (orderIdentifier, currentStage, newStage) => {
    db.collection("orders")
      .doc(orderIdentifier)
      .update({
        stage: newStage,
        etapa3_starts_date: new Date().toLocaleString("es-CO"),
      })
      .then(() => {
        console.log("updated the state to" + newStage);
      });
  };

  const changeStage3 = (orderIdentifier, currentStage, newStage) => {
    db.collection("orders")
      .doc(orderIdentifier)
      .update({
        stage: newStage,
        completed_production_date: new Date().toLocaleString("es-CO"),
      })
      .then(() => {
        console.log("updated the state to" + newStage);
      });
  };

  if (props.orderStage == "Pendiente")
    return (
      <button
        className="actionButton"
        onClick={() =>
          changeStage1(
            props.identifier,
            props.orderStage,
            "En producción: Etapas 1 y 2",
            "hora_inicio_produccion"
          )
        }
      >
        Empezar Producción
      </button>
    );
  if (props.orderStage == "En producción: Etapas 1 y 2")
    return (
      <button
        className="actionButton"
        onClick={() =>
          changeStage2(
            props.identifier,
            props.orderStage,
            "En producción: Etapa 3",
            "hora_inicio_etapa3"
          )
        }
      >
        Entrar a Etapa 3
      </button>
    );
  if (props.orderStage == "En producción: Etapa 3")
    return (
      <button
        className="actionButton"
        onClick={() =>
          changeStage3(
            props.identifier,
            props.orderStage,
            "Finalizado",
            "hora_finalizado"
          )
        }
      >
        Finalizar
      </button>
    );
  if (props.orderStage == "Finalizado")
    return <button className="noneButton"></button>;
};

export default Actions;
