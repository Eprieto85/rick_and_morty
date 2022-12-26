import React from 'react';
import styles from './Search.module.scss';

// Desestructurar accesorios, y creamos la función searchBtn
const Search = ({setSearch,setPageNumber})=>{                    //nuevo
    let searchBtn =(e)=>{                    //nuevo
        e.preventDefault();
     };   
    return (
// dentro de la declaración de devolución "return" creamos el formulario para contener las etiquetas y boton
       <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
           
           {/* el input usa onChange para buscar al momento de digitar el personaje */}
            <input 
            onChange={e=>{
                setPageNumber(1);
                setSearch(e.target.value);
                }} 
                placeholder='Buscar por personaje'
                className={styles.input}
                type="text"   />
            <button 
            onClick={searchBtn}className={`${styles.btn} btn btn-primary fs-5`}>Buscar</button>
       </form>
    );
};    
 
export default Search;    //nuevo