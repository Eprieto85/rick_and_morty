import styles from './Login.module.css';
import { validation } from "../../../Components/Auth/validation";
import { useNavigate } from 'react-router-dom';
import { useEffect,useContext,useState } from 'react'; //useEffect para el sweet Alert
import Swal from 'sweetalert2'   //dice q use Swal yo use msjLog
import Context from '../../../Components/Context/Context';

const Login = (props) => {
// este alert, es solo para indicar al usuario como logearse

useEffect(()=>{
  msjLog();
},[]);

const msjLog=()=>{
  Swal.fire({
    icon:'info',
    title:'Bienvenido al Login',
        // text:'Esta es una plantilla del login. Para ingresar, el usuario es - prueba@gmail.com - y contraseña - Password1 - Escribir exactamente igual',
    html:'Esta es una plantilla del login. Para ingresar<p><p><b>Usuario:</b> prueba@gmail.com<br><b>Contraseña: </b>Password1',
footer:`<b>Hoy es:&nbsp;</b> ${new Date().toLocaleDateString()}`,
        buttons:'Aceptar',
        timer: "50000"
      });
    }
// este alert, es solo para indicar al usuario como logearse


// intento de agregar la validación de login
const [userData,setUserData]=useState({
// setea los datos q vienen para validar del login
  username:"",
  password:""
})
// validación de errores de escritura en login
const [errors,setErrors]=useState({
  username:"",
  password:""
})

// import de validación de errores de escritura en login
const handleInputChange=(e)=>{
  setErrors(
      validation({
      ...userData,
      [e.target.name]:e.target.value,
})
)
  setUserData({
      ...userData,
      [e.target.name]:e.target.value,
})
}
const handleSubmit=(e)=>{
  e.preventDefault();
  props.login(userData);
  }
  
// intento de agregar la validación de login
  const {logearse}=useContext(Context);  
  const navegacion=useNavigate();        //react de ruta q nos permite navergar cuando se haga el login
  
// usuario de login chambon
const userNam="prueba@gmail.com";
const passWor="Password1";

  const login=()=>{         // const login=()=>{   voy a poner datos
  if(userData.username===userNam && userData.password===passWor){
    logearse('prueba@gmail.com');      //  logearse('prueba')   // esto es el usuario viendo por consola
    navegacion('/', {replace:true})
  }
  }

  
  


  return (
    <>
    <section onSubmit={handleSubmit}>

    <div className={`${styles.color}`}></div>
    <div className={`${styles.color}`}></div>
    <div className={`${styles.color}`}></div>
    <div className={`${styles.box}`}>

<div className={`${styles.square}`} style={{"--i":"0;"}}></div>
<div className={`${styles.square}`} style={{"--i":"1;"}}></div>
<div className={`${styles.square}`} style={{"--i":"2;"}}></div>
<div className={`${styles.square}`} style={{"--i":"3;"}}></div>
<div className={`${styles.square}`} style={{"--i":"4;"}}></div>


    <div className={` ${styles.containerLog}`}>
      <div className={`${styles.form}`}>
        <form>
            <h1 className="ubuntu mb-1">Iniciar Sesión</h1>
        <div className={`${styles.inputBox}`}>
          {/* <label className='ubuntu d-flex fs-5 mb-1' htmlFor='name'>Name:</label> */}
          {/* <input type="text" placeholder="Name" name='name' id='name' required autoComplete='off'/>     este depende del useForm */}
        </div>

        <div className={`${styles.inputBox}`}>
          {/* <label className='ubuntu d-flex fs-5 mb-1' htmlFor='email'>Email:</label> */}
          <input type="email" placeholder="Email" name='username' id='email' value={userData.username} onChange={(e)=>handleInputChange(e)} required autoComplete='off'/>     {/* este depende del useForm*/}
        </div><p>{errors.username && errors.username}</p>

        <div className={`${styles.inputBox}`}>
          {/* <label className='ubuntu d-flex fs-5 mb-1'htmlFor='password'>Password:</label> */}
          <input type="password" placeholder="Password" name='password' id='password' value={userData.password} onChange={(e)=>handleInputChange(e)} required autoComplete='off'/>     {/* este depende del useForm*/}
        </div><p>{errors.password && errors.password}</p>

        <div className={`${styles.inputBox}`}>
        <input type="submit" onClick={login} value="Login"/>    {/* se activa el evento login */}
      {/* <button >Entrar</button> */}
        </div>
        <p className={`ubuntu  mb-1 ${styles.forget}`}> Olvidaste contraseña? <a href="#h">Click Aquí</a></p>
        <p className={`ubuntu  mb-1 ${styles.forget}`}> No tienes cuenta? <a href="usuario" >Registrate</a></p> 
        {/* onClick={()=>msjLog()} */}
      </form>
      </div>
        </div>
          </div>

    </section>
    </>
  );
};
export default Login