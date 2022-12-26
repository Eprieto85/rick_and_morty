import React,{ useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Context from '../Context/Context';
import './Navbar.css'

const Navbar = () => {
   // evento para responsive del navbar
const[click,setClick] =useState(false);
const handleClick =()=>setClick(!click);

   //evento q logre para cambiar los datos del navbar
const {logeado}=useContext(Context)
   // evento para el logout
const navegacion=useNavigate();
const {deslogearse}=useContext(Context)
const logout=()=>{
   deslogearse();
   navegacion('/login',{replace:true})
   }
return (
<>
 <nav className='navbar'>
     <h1 className="nav-logo-img" >
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/128px-Rick_and_Morty.svg.png' alt="logo-Rick&Morty"/>
        </h1>

<ul className={click?'nav-menu active':'nav-menu'}>
      {/* logeado:true */}
{        
   logeado ? (
      <>

<li className='nav-item'><NavLink to="/dashboard" activeClassName="active" className="nav-link" onClick={handleClick}>Dashboard</NavLink></li>
<li className='nav-item'><NavLink to="/mycards" activeClassName="active" className="nav-link" onClick={handleClick}>My Cards</NavLink></li>
    <li className='nav-item'><NavLink to="/cards" activeClassName="active" className="nav-link" onClick={handleClick}>Cards</NavLink></li>
    <li className='nav-item'><NavLink to="/episodes" activeClassName="active" className="nav-link" onClick={handleClick}>Episodes</NavLink></li>
    <li className='nav-item'><NavLink to="/location" activeClassName="active" className="nav-link" onClick={handleClick}>Location</NavLink></li>
    <li className='nav-btn'><button  className="nav-link" onClick={logout}>LogOut</button></li> 

      </>
   ):(
      <>

    <li className='nav-item'><NavLink to="/home" activeClassName="active" className="nav-link" onClick={handleClick}>Home</NavLink></li>
    <li className='nav-item'><NavLink to="/about" activeClassName="active" className="nav-link" onClick={handleClick}>About</NavLink></li>
    {/* <li className='nav-item'><NavLink to="/pend" activeClassName="active" className="nav-link" onClick={handleClick}>Pend</NavLink></li> */}
    <li className='nav-btn'><NavLink to="/login" className="nav-link" onClick={handleClick}>LogIn</NavLink></li>

      </>)
}
      
</ul>
<div className="nav-icon" onClick={handleClick}>
    <i className={click?"fas fa-times":"fas fa-bars"}></i>
</div>
 </nav>
</> 
);
}
export default Navbar
// //este tipo de login es solo demostrativo de una función, 
// // solo para ejecutar el proceso pero no es seguro para una plataforma con restricciones de seguridad