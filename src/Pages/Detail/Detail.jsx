import React,{ useState, useEffect } from 'react';      
import { useParams} from "react-router-dom";    //useNavigate 

// export default function Detail(){
// const { detailId }=useParams();
// const navigate = useNavigate();
// const [character,setCharacter] = useState({});

// useEffect(() => {
//     fetch(`https://rickandmortyapi.com/api/character/${detailId }`)
//        .then((response) => response.json())
//        .then((char) => {
//           if (char.name) {
//              setCharacter(char);
//           } else {
//              window.alert('No hay personajes con ese ID');
//           }
//        })
//        .catch((err) => {
//           window.alert('Error',err);
//        });
//     return setCharacter({});
//  }, [detailId]);

//  return ( 
//         <div>
//             <div>
//                 <button onClick={()=>navigate("/home")}>Volver</button>
//             </div>
//             <h1>NOMBRE:     {character.name}</h1>
//             <img src={character.image} alt={character.name} />
//             <h2>STATUS:     {character.status}</h2>
//             <h2>ESPECIE:    {character.specie}</h2>
//             <h2>GENERO:     {character.gender}</h2>
//             {/* <h2>ORIGIN:     {character.origin?.name}</h2> */}
//             <h2>ORIGIN:     {character.origin.name}</h2>
//         </div>
//  );
// }


const Detail = () => {
    let { id }=useParams();
    let [fetchedData, updateFetchedData]=useState([]);
    let {name,image,location,origin,gender,species,status,type}=fetchedData;

    let api=`https://rickandmortyapi.com/api/character/${id}`;
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
        <div className='container d-flex justify-content-center'>
             <div className='d-flex flex-column gap-3'>
                 {/* <button onClick={()=>navigate("/home")}>Volver</button> */}
             <h1 className='text-center'>NOMBRE:  {name}</h1>
             <img className='img-fluid' src={image} alt="" />

             {(()=>{
   if(status ==="Dead"){
      return <div className="badge bg-danger fs-5">{status}</div>;
   }else if(status ==="Alive"){
      return <div className="badge bg-success fs-5">{status}</div>
   }else{
      return <div className="badge bg-secondary fs-5">{status}</div>
   }
})()}
    <div className='content'> 
        <div className=''><span className='col-lg-4 fw-bold'>GENERO:</span><div className='col-3'>{gender}</div></div>
        <div className=''><span className='fw-bold'>ESPECIE:  </span>{species}</div>
        <div className=''><span className='fw-bold'>TYPE:     </span>{type===""?"Unknown":type}</div>
        <div className=''><span className='fw-bold'>LOCATION: </span>{location?.name}</div>
        <div className=''><span className='fw-bold'>ORIGIN:   </span>{origin?.name}</div>
                </div>
             </div>
         </div>
  );
};

export default Detail
