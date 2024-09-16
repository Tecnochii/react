import { configureStore } from "@reduxjs/toolkit";
import personajesReducer from "./reducers/personajesReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    userReducer,
    personajesReducer,
  },
});
export default store;
