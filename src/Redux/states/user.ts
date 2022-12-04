import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";

export const EmptyUserState:UserInfo={
id:0,
name:"",
email:"",
}

export const userSlice=createSlice({
    name:"user",
    initialState:EmptyUserState,    // initialState es un elemento vacio y lo declaramos afuera con el const
    reducers: {
        createUser: (state,action)=>action.payload,
        updateUser: (state,action)=>({...state,...action.payload}),//actualiza y trae el contenido del state y trae una nueva propiedad la actualiza con el nuevo valor con el payload
    resetUser: ()=>EmptyUserState // por buenas practicas el resets
}
});

export const {createUser,updateUser,resetUser}=userSlice.actions; //exportamos cada una de las acciones de nuestro state

export default userSlice.reducer;   //Por ultimo export el reducer