import { createAction } from "@reduxjs/toolkit";

const loadPersonajes = createAction("loadPersonajes", (data) => {
  const personajes = data;

  return {
    payload: personajes,
  };
});

const filterPersonajesPerName = createAction("filterPersonajesPerName",(name) => {
    return {
      payload: { name: name },
    };
  }
);

export { loadPersonajes, filterPersonajesPerName };
