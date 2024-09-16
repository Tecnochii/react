import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loadUser = createAsyncThunk("loadUser", async () => {



  const userData = await axios.get("/api/client/current").then((response) => response.data)
  
  ;

  return {
    payload: { name: userData.name, role: userData.role },
  };
});



const login = createAsyncThunk("login", async ({email, password}) => {
   try {
     
   const userData = await  axios.post("/api/login?"+email+"&"+password)


   localStorage.setItem("token", userData.token)


   return {
       payload: userData
   }
   } catch (error) {
        console.log(error.message);
        
   }

})  

export { loadUser, login };
