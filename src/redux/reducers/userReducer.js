import { createReducer } from "@reduxjs/toolkit";
import { loadUser } from "../actions/userAction";





const initialState = {
    user: {
        name: "Ema",
        role: "ADMIN"

    }
    ,
    status: "idle"

}




    const userReducer = createReducer(initialState, (builder) =>{

        builder.addCase(loadUser.fulfilled, (state, action)=>{ 
                
            return state = {
                ...state,
                user: action.payload.userData,
                status: "succeded"
            }
    }

    ).addCase(loadUser.pending, (state)=>{
        return state = {
            ...state,
            status: "pending"
        }
        

    


})
    })


    export default userReducer