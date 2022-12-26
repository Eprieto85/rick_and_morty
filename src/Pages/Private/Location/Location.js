import React, {useState,useEffect} from 'react'
import CardChar from '../../../Components/CardChar/CardChar';
import InputGroup from '../../../Components/Filters/Category/InputGroup';

const Location = () => {
  // agregamos el id de cada capitulo
  let [id,setId]=useState(1);
  // agregamos el info q trae los datos del localización
let [info, setInfo]=useState([]);
// agregamos el result de la llamada de los personajes
let [results, setResults]=useState([]);
// agregamos los datos de ubicación de bd
let {name,type,dimension}=info;
// console.log(info);
  // este es el enlace q contiene todo el api
  let api=`https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function(){
let data = await fetch(api).then((res) =>res.json());
// console.log(data);
setInfo(data);

// desde aqui vamos a llamar las tarjetas con el useEffect y mapeamos desde promesa
let a= await Promise.all(
data.residents.map((x) =>{
  return fetch(x).then((res) => res.json());
})
);
  setResults(a);
    })();
  },[api]);
  return (
    <div className='container'>
      <div className='row mb-4'>
        {/* usamos el if ternario para mostrar los personajes q hicieron parte del episodio */}
        <h1 className='text-center mb-4'>Ubicación : {" "}
        <span className='text-primary'>{name===""?"Unknown":name}</span></h1>
        <h5 className='text-center'>Dimensión: {dimension===""?"Unknown":dimension}</h5>
        <h6 className='text-center'>Tipo: {type===""?"Unknown":type}</h6>
      </div>
      <div className='row'>
      <div className='col-lg-3 col-12'>
        <h4 className='text-center mb-4'>Elegir Ubicación</h4>
    <InputGroup setId={setId} name="Location - " total={126}/>
        </div>
      <div className='col-lg-8 col-12'>
        <div className='row'><CardChar page="/location/" results={results}/></div>
      </div>
    </div>
  </div>
  );
};

export default Location