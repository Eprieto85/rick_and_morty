import { useReducer } from "react";
import Context from "./Context";
import myReducer from './myReducer';
import types from "./types";

const init=() =>{
    const user=localStorage.getItem("valor")
    return {
        logeado:!!user,
        usuario:user
    }
}

const Provider = ({children}) => {
    const [auth,dispatch] =useReducer(myReducer,{},init)

const logearse=(user)=>{
    const action={
        type:types.login,
        payload:user
    }
    localStorage.setItem("valor",user)
    dispatch(action)
}

const deslogearse=()=>{
    const action={
        type:types.logout,
        payload:null
    }
    localStorage.removeItem("valor")
    dispatch(action)
}

  return (
    <Context.Provider value={{...auth,logearse,deslogearse}}>
        {children}
    </Context.Provider>
  )
}
export default Provider
