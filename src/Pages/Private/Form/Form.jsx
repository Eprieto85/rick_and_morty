import React from "react";
import { validation } from "./validation.js";
import styles from './Form.module.css';

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
    // <div className='container justify-content-center '>
        <section >

        <div className={`${styles.color}`}></div>
        <div className={`${styles.color}`}></div>
        <div className={`${styles.color}`}></div>
        <div className={`${styles.box}`}>

<div className={`${styles.square}`} style={{"--i":"0;"}}></div>
<div className={`${styles.square}`} style={{"--i":"1;"}}></div>
<div className={`${styles.square}`} style={{"--i":"2;"}}></div>
<div className={`${styles.square}`} style={{"--i":"3;"}}></div>
<div className={`${styles.square}`} style={{"--i":"4;"}}></div>

            <div className={`${styles.containerLog}`}>
                <div className={`${styles.form}`}>
                    <h2 className="ubuntu">Login <span className='text-primary'> Form</span></h2>
        <form onSubmit={handleSubmit}>
        <div className={`${styles.inputBox}`}>
        <label className='ubuntu d-flex fs-5 mb-1' htmlFor="">Username:</label>
        <input type="text" placeholder="Username" name="username" value={userData.username} onChange={handleInputChange} />
        </div>
<p>{errors.username && errors.username}</p>
<div className={`${styles.inputBox}`}>
        <label className="ubuntu d-flex fs-5 mb-1" htmlFor="">Password:</label>
        <input type="password" placeholder="Password" name="password" value={userData.password} onChange={handleInputChange} />
        </div>
        <p>{errors.password && errors.password}</p>
        <div className={`${styles.inputBox}`}>
        {/* <button type="submit">LOGIN</button> */}
        <input type="submit" value="Login"/>
        </div>
        <p className={`${styles.forget}`}> Forgot Password ? <a href="#h">Click Here</a></p>
        <p className={`${styles.forget}`}> Don't have an account ? <a href="#h">Sign Up</a></p>
        </form>
    </div>
        </div>
            </div>


        </section>
    // </div>
    );
}