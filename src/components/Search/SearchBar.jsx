import React, { useState } from 'react';
import styles from './Search.module.scss';



const SearchBar = ({setSearch,setPageNumber,props})=>{                    //nuevo


// export default function SearchBar(props) {         //antiguo
   const [character, setCharacter] = useState(""); //setUserInput estaba dentro del []
   
   function handleChange (e){
      setCharacter(e.target.value);
   }

   return (
       <div>
         <div className="">
          <input type='search' name='search' value={character} id="" onChange={handleChange} />
       <button onClick={()=>props.onSearch(character)} >Agregar</button>
       </div>
       <br />
       
       <form className={`${styles.search} d-flex justify-content-center gap-4 mb-5`}>
            <input onChange={(e)=>{
                setPageNumber(1);
                setSearch(e.target.value);
               }}
                type="text" 
                className={styles.input} 
                placeholder='Buscar por personaje' />
            <button onClick={e=>{e.preventDefault()}} className={`${styles.btn} btn btn-primary fs-5`}>Buscar</button>
       </form>

       </div>
    );
 }
 

 export default SearchBar;    //nuevo