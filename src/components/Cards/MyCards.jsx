import React from 'react'
import { useState } from 'react';
import styles from '../../Pages/Detail/Details.module.scss';

const MyCards = () => {

//Declaración personaje
const [characters, setCharacters]=useState([]);


//Función fetch barra busqueda en search.jsx
function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json())
     .then((data) => {
        if (data.name) {
           setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
}

// cierra la tarjeta del personaje q llame
// function  onClose(id){
//   setCharacters(oldState=>oldState.filter(char=>char.id !== id));
// }


  return (
    <div className='container d-flex justify-content-center mb-5'>MyCards
    <div className='d-flex flex-column gap-3'>
      <button className={`${styles.btn} btn btn-primary fs-5`}>Volver</button>
      

    </div>
    </div>
  )
}

export default MyCards