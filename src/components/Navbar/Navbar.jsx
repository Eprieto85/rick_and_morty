
// anterior codigo con soyHenry
// import React from "react"; //parece q lo necesito
// import SearchBar from "../Search/SearchBar"
// import { Link } from "react-router-dom";

// export default function Navbar(props){
// return (
// <div>
//     <Link to={"/home"}>
//         <span>Home</span>
//     </Link>
//     <Link to={"/about"}>
//         <span>About</span>
//     </Link>
//     <SearchBar onSearch={props.onSearch} />
// </div>
// );
// }

import React,{ useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";//,useNavigate
import '../../App.css';
import './Navbar.css'

const Navbar = () => {
// evento para responsive del navbar
const[click,setClick] =useState(false);
const handleClick =()=>setClick(!click);

// evento para el logout
const navegacion=useNavigate();
const logout=()=>{
   navegacion('/login',{replace:true})
}


  // const navigate=useNavigate();  eliminar la funcion q continua y dejar del return en adelante
// para no mostrar el boton LogOut cuando salga del app
  // function hideButton(){
  //   document.getElementById('logOut').style.display='none';
  // }

  return (
    <>
    <nav className='navbar'>
    {/* <nav className="navbar navbar-expand-lg bg-light mb-4" onClick={hideButton}> */}
  {/* <div className="container">para eliminar al final */}
  <h1 className="nav-logo-img" >
  <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/128px-Rick_and_Morty.svg.png' alt="logo-Rick&Morty"/>
  </h1>
  {/* <Link to="/" className="fs-3 ubuntu navbar-brand">{/* para eliminar al final */}
    {/* Rick & <span className='text-primary'>Morty</span>  </Link>      */} 
  
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> */}
    {/* <style jsx> */}
        {/* {`
        button[aria-expanded="false"]>.close{
            display: none;
        }
        button[aria-expanded="true"]>.open{
            display: none;
        }
        `} */}
        {/* </style>     */}
      {/* <span className="navbar-toggler-icon"></span> cambie los iconos*/} 
      {/* <i class="fas fa-bars open fw-blod text-dark"></i> */}
      {/* <i class="fas fa-times close fw-blod text-dark"></i> */}
    {/* </button> */}
    {/* <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup"> */}
      {/* <div className="navbar-nav fs-5"> */}
        {/* <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink> */}
        {/* <NavLink to="/home" className="nav-link">Home</NavLink> qda en blanco */}
        {/* <NavLink to="/mycards"    className="nav-link">My Cards   </NavLink> */}
        {/* <NavLink to="/characters" className="nav-link">Characters </NavLink> */}
        {/* <NavLink to="/episodes"   className="nav-link">Episodes   </NavLink> */}
        {/* <NavLink to="/location"   className="nav-link">Location   </NavLink> */}
        {/* <NavLink to="/about"      className="nav-link">About      </NavLink> */}
        {/* <NavLink to="/logout" className="logOff nav-link" id="logOut" onClick={()=>navigate("/")} style={{display:"none"?"none":"none"}}>Logout</NavLink> */}
      {/* </div> */}
    {/* </div> */}
  {/* </div> */}
  <ul className={click?'nav-menu active':'nav-menu'}>
    <li className='nav-item'><NavLink to="/mycards"    activeClassName="active" className="nav-link" onClick={handleClick}>My Cards    </NavLink></li>
    <li className='nav-item'><NavLink to="/characters" activeClassName="active" className="nav-link" onClick={handleClick}>Characters  </NavLink></li>
    <li className='nav-item'><NavLink to="/episodes"   activeClassName="active" className="nav-link" onClick={handleClick}>Episodes    </NavLink></li>
    <li className='nav-item'><NavLink to="/location"   activeClassName="active" className="nav-link" onClick={handleClick}>Location    </NavLink></li>
    <li className='nav-item'><NavLink to="/about"      activeClassName="active" className="nav-link" onClick={handleClick}>About       </NavLink></li>
    <li className='nav-btn'><button  className="nav-link" onClick={logout}>LogOut</button></li>
</ul>

  <div className="nav-icon" onClick={handleClick}>
    <i className={click?"fas fa-times":"fas fa-bars"}></i>
</div>

</nav>
</>
  )
};

export default Navbar