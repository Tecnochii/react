import React, { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/main.css";
import axios from "axios";

function Main() {
    const [arrayCards, setArrayCards] = useState([
      { titulo: "Card 1", contenido: "Contenido 1" },
      { titulo: "Card 2", contenido: "Contenido 2" },
      { titulo: "Card 3", contenido: "Contenido 3" },
      { titulo: "Card 4", contenido: "Contenido 4" },
    ])  
   

    const [arrayPersonajes, setArrayPersonajes] = useState([])


  // let arrayCards = [
  //   { titulo: "Card 1", contenido: "Contenido 1" },
  //   { titulo: "Card 2", contenido: "Contenido 2" },
  //   { titulo: "Card 3", contenido: "Contenido 3" },
  //   { titulo: "Card 4", contenido: "Contenido 4" },
  // ];





  const añadirCard = () => {
    setArrayCards([...arrayCards, { titulo: "Card "+(arrayCards.length+1), contenido: "Contenido "+(arrayCards.length+1) }])
    // arrayCards.push({ titulo: "Card "+(arrayCards.length+1), contenido: "Contenido "+(arrayCards.length+1) })
    console.log("Se añadio una Card");
    
  }


  const solicitarDatosDePersonajes =  () => {
    let arrAuxPersonajes = [
      {
      id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
      name: "Harry Potter",
      alternate_names: [
      "The Boy Who Lived",
      "The Chosen One",
      "Undesirable No. 1",
      "Potty"
      ],
      species: "human",
      gender: "male",
      house: "Gryffindor",
      dateOfBirth: "31-07-1980",
      yearOfBirth: 1980,
      wizard: true,
      ancestry: "half-blood",
      eyeColour: "green",
      hairColour: "black",
      wand: {
      wood: "holly",
      core: "phoenix tail feather",
      length: 11
      },
      patronus: "stag",
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: "Daniel Radcliffe",
      alternate_actors: [ ],
      alive: true,
      image: "https://ik.imagekit.io/hpapi/harry.jpg"
      },]
    
  
      axios.get("https://hp-api.onrender.com/api/characters")
      .then((response)=>{
        arrAuxPersonajes = response.data
  
        setArrayPersonajes(arrAuxPersonajes)
        
      })
      .catch((error)=>{
        console.log(error)
      })
  }


useEffect(()=>{


  
  console.log("Se cargo el componente Main")
  
  solicitarDatosDePersonajes()

  

},
 [])


 useEffect(()=>{

  console.log("Segundo useEffect")
  console.log(arrayPersonajes);
  

 },[arrayPersonajes])


  return (
    <main>

      <div className="cards">
        {arrayPersonajes.map((personaje) => (
          <Card
            titulo={personaje.name}
            contenido={personaje.house}
            cta="Mas informacion"
          />
        ))}


      </div>
      <button onClick={()=> añadirCard()}>Añadir Card</button>


    </main>
  );
}

export default Main;
