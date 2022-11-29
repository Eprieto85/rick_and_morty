import React from "react";
import { validation } from "./validation.js";

export default function Form(props){
    const [userData,setUserData]=React.useState({
    username:"",
    password:"",
    });

    const [errors,setErrors]=React.useState({
        username:"",
        password:"",
        });

    function handleInputChange(e){
        setErrors(
            validation({
            ...userData,
            [e.target.name]:e.target.value,
    })
);
        setUserData({
            ...userData,
            [e.target.name]:e.target.value,
    });
}

function handleSubmit(e){
    e.preventDefault();
    props.login(userData);
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Username:</label>
        <input 
        type="text" 
        name="username" 
        value={userData.username} 
        onChange={handleInputChange} 
        />
<p>{errors.username && errors.username}</p>

        <label htmlFor="">Password:</label>
        <input 
        type="password" 
        name="password" 
        value={userData.password} 
        onChange={handleInputChange} 
        />
        <p>{errors.password && errors.password}</p>

        <button type="submit">LOGIN</button>
        </form>
    </div>
    );
}