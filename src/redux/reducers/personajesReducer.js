import { createReducer } from "@reduxjs/toolkit";
import { filterPersonajesPerName, loadPersonajes } from "../actions/personajesAction";

const initialState = {
  personajes: [
    {
      name: "",
      house: "",
    },
  ],
};



const personajesReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadPersonajes, (state, action)=>{


        console.log(action.payload);
        

        return state = {
            ...state,
            personajes: action.payload
        }
    } )
    // .addCase(deletePersonajes, (state)=>{

    //     return initialState
    // })
    .addCase(filterPersonajesPerName, (state, action)=>{

        return  state ={

            ...state,
            personajes: state.personajes.filter( personaje => personaje.name === action.payload.name)
        }


    })

    
})


export default personajesReducer