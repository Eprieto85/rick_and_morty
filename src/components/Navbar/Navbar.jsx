
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

import React from 'react'
import { NavLink,Link } from "react-router-dom";//,useNavigate
import '../../App.css';

const Navbar = () => {
  // const navigate=useNavigate();
// para no mostrar el boton LogOut cuando salga del app
  function hideButton(){
    document.getElementById('logOut').style.display='none';
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4" onClick={hideButton}>
  <div className="container">
  
  <img className='imgHead' src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png' alt="logo-Rick&Morty" />
  <Link to="/" className="fs-3 ubuntu navbar-brand">Rick & <span className='text-primary'>Morty</span>  </Link>     
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <style jsx>
        {`
        button[aria-expanded="false"]>.close{
            display: none;
        }
        button[aria-expanded="true"]>.open{
            display: none;
        }
        `}
        </style>    
      {/* <span className="navbar-toggler-icon"></span> cambie los iconos*/} 
      <i class="fas fa-bars open fw-blod text-dark"></i>
      <i class="fas fa-times close fw-blod text-dark"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
        {/* <NavLink to="/home" className="nav-link">Home</NavLink> qda en blanco */}
        <NavLink to="/mycards" className="nav-link">My Cards</NavLink>
        <NavLink to="/characters" className="nav-link">Characters</NavLink>
        <NavLink to="/episodes" className="nav-link">Episodes</NavLink>
        <NavLink to="/location" className="nav-link">Location</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        {/* <NavLink to="/logout" className="logOff nav-link" id="logOut" onClick={()=>navigate("/")} style={{display:"none"?"none":"none"}}>Logout</NavLink> */}
      </div>
    </div>
  </div>
</nav>
  )
};

export default Navbar