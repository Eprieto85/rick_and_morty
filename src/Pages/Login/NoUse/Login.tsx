import { getMorty } from "../../../services/auth.service";
import {useDispatch} from 'react-redux';
import {createUser} from'../../../Redux/states/user';
import React from "react";

function Login(){
   const dispatch = useDispatch();
   const login=async()=>{
    try{    //con esto enviamos los resultados al store del redux
        const result = await getMorty();
        dispatch(createUser(result));
   }catch(error){}
};
    return(
        <div>
        <h2>Aqui va el login</h2>
        <button onClick={login}>Login</button>
        </div>
);
}
export default Login;