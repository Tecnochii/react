import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import "../styles/main.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  filterPersonajesPerName,
  loadPersonajes,
} from "../redux/actions/personajesAction";
import { loadUser, login } from "../redux/actions/userAction";

function Main() {
  const [arrayCards, setArrayCards] = useState([
    { titulo: "Card 1", contenido: "Contenido 1" },
    { titulo: "Card 2", contenido: "Contenido 2" },
    { titulo: "Card 3", contenido: "Contenido 3" },
    { titulo: "Card 4", contenido: "Contenido 4" },
  ]);

  // const [arrayPersonajes, setArrayPersonajes] = useState([])

  let arrayPersonajes = useSelector((store) => store.personajesReducer.personajes);

  const dispatch = useDispatch();

  const buscarRef = useRef();

  const añadirCard = () => {
    setArrayCards([
      ...arrayCards,
      {
        titulo: "Card " + (arrayCards.length + 1),
        contenido: "Contenido " + (arrayCards.length + 1),
      },
    ]);
    // arrayCards.push({ titulo: "Card "+(arrayCards.length+1), contenido: "Contenido "+(arrayCards.length+1) })
    console.log("Se añadio una Card");
  };


 


  const solicitarDatosDePersonajes = () => {
    let arrAuxPersonajes = [
      {
        id: "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
        name: "Harry Potter",
        alternate_names: [
          "The Boy Who Lived",
          "The Chosen One",
          "Undesirable No. 1",
          "Potty",
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
          length: 11,
        },
        patronus: "stag",
        hogwartsStudent: true,
        hogwartsStaff: false,
        actor: "Daniel Radcliffe",
        alternate_actors: [],
        alive: true,
        image: "https://ik.imagekit.io/hpapi/harry.jpg",
      },
    ];

    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        arrAuxPersonajes = response.data;

        // setArrayPersonajes(arrAuxPersonajes)
        console.log(arrAuxPersonajes);

        dispatch(loadPersonajes(arrAuxPersonajes));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("Se cargo el componente Main");

    //Solo si no tengo datos de personajes en el store

    if (arrayPersonajes[0].name == "") {
      console.log("Se solicitaron los datos de personajes");

      solicitarDatosDePersonajes();
    }

    // dispatch(loadUser());
  }, []);

  //  useEffect(()=>{

  //   console.log("Segundo useEffect")
  //   console.log(arrayPersonajes);

  //  },[arrayPersonajes])

  const role = useSelector((store) => store.userReducer.user.role);

  return (
    <main>
      <div>
        <label htmlFor="">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="">
          Password
          <input type="text" />
        </label>

        <button onClick={() => dispatch(login({email: "", password: ""}))} >Login</button>
      </div>

      {role == "ADMIN" && (
        <>
          <label htmlFor="">
            Buscar
            <input ref={buscarRef} type="text" />
          </label>
          <button
            onClick={() =>
              dispatch(filterPersonajesPerName(buscarRef.current.value))
            }
          >
            Buscar
          </button>
        </>
      )}

      <div className="cards">
        {arrayPersonajes?.map((personaje) => (
          <Card
            id={personaje.id}
            titulo={personaje.name}
            contenido={personaje.house}
            cta="Mas informacion"
          />
        ))}
      </div>
      <button onClick={() => añadirCard()}>Añadir Card</button>
    </main>
  );
}

export default Main;
