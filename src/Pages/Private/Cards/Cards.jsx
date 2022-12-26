import './Cards.css';
import Filters from "../../../Components/Filters/Filters"
import CardChar from '../../../Components/CardChar/CardChar';
import React, { useState,useEffect } from 'react';
import Pagination from '../../../Components/Pagination/Pagination';
import Search from '../../../Components/Search/Search';

  const Cards = () => {

  // Vamos a crear la barra de busqueda, usamos 2 hooks "useState" ahora tenemos clave de busqueda y numero de pagina
  let [pageNumber, setPageNumber] = useState(1);        //nuevo- 22-12-22 activar ahora si
let [search, setSearch]=useState("");                 //nuevo- 22-12-22 activar ahora si
// voy a agregar el array para filtro de los 3 "useState" del hooks almacena estado, genero y especie, se agregan al "api" con =${}
let [status, setStatus]=useState("");                 //nuevo- 22-12-22 activar ahora si
let [gender, setGender]=useState("");                 //nuevo- 22-12-22 activar ahora si
let [species, setSpecies]=useState("");               //nuevo- 22-12-22 activar ahora si


  // el "fetcedData" almacena los datos dela consola usando el hook "useState"  y almacena en la variable, tenemos una clave de funcion para cambiar los datos de la var con el hook "useEffect"
let [fetchedData, updateFetchedData]=useState([]);                                             //nuevo- 22-12-22 activar ahora si
  // let api es la url desde dond llamo todos los objetos , esta ira agregando objetos segun requiera
let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;              //nuevo 
// desestructuramos "info y result" de la var "fetchedData" y asi, almacenara en el "api" y con "updateFetchedData" podremos cambiar datos cuando queramos
let { info, results } = fetchedData;       //nuevo- 22-12-22 activar ahora si

  //Ahora con el hook "UseEffects" pedimos los datos... vamos a ingresar dentro de este el async para recargar
  useEffect(() => {
    // el observador de "api" permite recargar los cambios q se presentenen la variable "api"
    // la funcion "async"obtiene los datos sin procesar y convierte a "JSON"
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data.results);
    })();
  }, [api]);

    return (
<div className="Cards">
  <h1 className="text-center ubuntu mb-4">Tarjetas de Personajes</h1>
        <Search setPageNumber={setPageNumber}  setSearch={setSearch}/>

  <div className="container">
      <div className='row'>
      <Filters setSpecies={setSpecies}setGender={setGender} setStatus={setStatus} setPageNumber={setPageNumber}/>
        <div className="col-lg-8 col-12">
          <div className="row"> {/*Componente tarjeta sera ubicado aquí */}
          <CardChar page="/" results={results}/>
          </div>
        </div>
    </div>
  </div>
          <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
</div>
    );
  }
  export default Cards