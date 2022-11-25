import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import React, { useState, useEffect } from 'react'; 
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

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
  let [fetchedData, updateFetchedData]=useState([]);                                      //nuevo
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;              //nuevo &status=${status}&gender=${gender}&species=${species}
  let { info, results } = fetchedData;                                                   //nuevo

  // let [status, setStatus]=useState("");          //nuevo
  // let [gender, setGender]=useState("");          //nuevo
  // let [species, setSpecies]=useState("");          //nuevo

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data.results);
    })();
  }, [api]);

  const [characters, setCharacters]=useState([]);
  const [access, setAccess]=useState(false);

const username="prueba@gmail.com";
const password="Password1";

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
