import React from "react";
import "../styles/card.css";

function Card(props) {

    const handlerAlert = () => {
        alert(props.cta);
    }
    

  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>{props.contenido}</p>
      <button onClick={()=> handlerAlert()}>{props.cta}</button>
    </div>
  );
}

export default Card;
