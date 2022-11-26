import './App.css';
//Aqui Importe los React hooks y Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useEffect } from 'react'; 

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
// Estoy importando los modulos a medida q los voy necesitando
// import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
// import Search from './components/Card/SearchBar.jsx';
import Filters from './components/Filters/Filters.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import SearchBar from './components/Search/SearchBar.jsx';
import Search from './components/Search/Search.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';


function App() {
  let [pageNumber, setPageNumber] = useState(1);                                           //nuevo
  let [search, setSearch]=useState("");          //nuevo
// el "fetcedData" almacena los datos dela consola usando el hook "useState"  y almacena en la variable, tenemos una clave de funcion para cambiar los datos de la var con el hook "useEffect"
  let [fetchedData, updateFetchedData]=useState([]);                                      //nuevo
  // let api es la url desde dond llamo todos los objetos , esta ira agregando objetos segun requiera
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;              //nuevo &status=${status}&gender=${gender}&species=${species}
// desestructuramos "info y result" de la var "fetchedData" y asi, almacenara en el "api" y con "updateFetchedData" podremos cambiar datos cuando queramos
  let { info, results } = fetchedData;                                                   //nuevo

  // let [status, setStatus]=useState("");          //nuevo
  // let [gender, setGender]=useState("");          //nuevo
  // let [species, setSpecies]=useState("");          //nuevo

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

  //Declaración personaje y acceso login
  const [characters, setCharacters]=useState([]);
  const [access, setAccess]=useState(false);

  //Declaración Login
const username="prueba@gmail.com";
const password="Password1";

//Declaración barra del navegador
const location=useLocation();
const navigate=useNavigate();

useEffect(()=>{
  !access && navigate('/ ');
}, [access]);

function login(userData){
  if(userData.username === username && userData.password === password){
    setAccess(true);
    navigate("/home");
    document.getElementById('logOut').style.display='block';
  }
}

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

   
function  onClose(id){
  setCharacters(oldState=>oldState.filter(char=>char.id !== id));
}

function hideButton(){
  document.getElementById('logOut').style.display='none';
}

  return (
    // Este es mi "return statement" elimine todo y creo desde cero
    <div className="App text-center ubuntu" style={{ padding: '25px' }}>
      <h1 className="text-center ubuntu my-1">Rick & <span className='text-primary'>Morty</span>  </h1>     
      
      <div className="logOff" onClick={hideButton} >
      <button id="logOut" onClick={()=>navigate("/")} style={{display:"none"?"none":"none"}}>LogOut</button>     
       </div>
<br/>
        <img className='imgHead' src='https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png' alt="" /><br/>
      
      <SearchBar setPageNumber={setPageNumber} setSearch={setSearch}/>
      <Search setPageNumber={setPageNumber}  setSearch={setSearch}/>
        

<div className="container">
  <div className="row">
    <Filters />
  <div className="col-8">
    <div className='row'>
{/*Ya con el componente importado, usamos Cards para mostrar las tarjetas*/}
<Cards results={results}/>

    </div>
  </div>
  </div>

</div>
     
<Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>



<div>
{location.pathname==="/"?null:<Navbar onSearch={onSearch} />}
    <Routes>
      <Route path="/" element={<Form login={login}  />}></Route>
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/detail/:detailId" element={<Detail />}/>
    </Routes>    
    </div>

        
 
{/* codigo nuevo */}
<h1 className="text-center mb-3">Personajes{/* Personajes */}</h1>
{/* Barra busqueda */}
 <Search setPageNumber={setPageNumber}  setSearch={setSearch}/>
  <div className="container">
    <div className='row'>
      {/* <div className="col-3">Componente Filtro sera ubicado aqui */}
      <Filters />
      {/* </div> */}
          <div className="col-lg-8 col-12">
              <div className="row">{/*Componente tarjeta sera ubicado aquí */}
              <Cards results={results}/>
  </div>
    <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </div>          {/* 1 */}
          </div>          {/* 2 */}
              </div>          {/* 3 */}
    </div>          //4
  );

}

export default App;
