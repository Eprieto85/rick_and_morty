import React, {useState,useEffect} from 'react'
import CardChar from '../../../Components/CardChar/CardChar';
import InputGroup from '../../../Components/Filters/Category/InputGroup';

const Episodes = () => {
  // agregamos el id de cada capitulo
  let [id,setId]=useState(1);
  // agregamos el info q trae los datos del episodio
let [info, setInfo]=useState([]);
// agregamos el result de la llamada de los personajes
let [results, setResults]=useState([]);
// agregamos el llamado de la emisión del cap
let {air_date,name}=info;
// console.log(info);
  // este es el enlace q contiene todo el api
  let api=`https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function(){
let data = await fetch(api).then((res) =>res.json());
// console.log(data);
setInfo(data);

// desde aqui vamos a llamar las tarjetas con el useEffect y mapeamos desde promesa
let a= await Promise.all(
data.characters.map((x) =>{
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
        <h1 className='text-center mb-4'>Episodio : {" "}
        <span className='text-primary'>{name===""?"Unknown":name}</span></h1>
        <h5 className='text-center'>Fecha al Aire: {air_date===""?"Unknown":air_date}</h5>
      </div>
      <div className='row'>
      <div className='col-lg-3 col-12'>
        <h4 className='text-center mb-4'>Elige Episodios</h4>
    <InputGroup setId={setId} name="Episode - " total={51}/>
        </div>
      <div className='col-lg-8 col-12'>
        <div className='row'><CardChar page="/episodes/" results={results}/></div>
      </div>
    </div>
  </div>
  );
};

export default Episodes