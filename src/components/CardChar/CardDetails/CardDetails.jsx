import React,{ useState, useEffect } from 'react';      
import { useParams,useNavigate} from "react-router-dom";
import styles from './CardDetails.module.scss';

const CardDetails = () => {
  let {id} =useParams()
  let [fetchedData, updateFetchedData]=useState([]);
  let {name,image,location,origin,gender,species,status,type}=fetchedData;
  const navigate = useNavigate();

  let api=`https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
        // el observador de "api" permite recargar los cambios q se presentenen la variable "api"
        // la funcion "async"obtiene los datos sin procesar y convierte a "JSON"
    (async function () {
    let data = await fetch(api).then((res) => res.json());
    updateFetchedData(data);// console.log(data.results);
      })();
}, [api]);

  return (
    <div className='container '>
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5">
  <button onClick={()=>navigate("/")} className={`${styles.btnV}`}>Volver</button>
      </div>

  <div className={`${styles.card}`}>
    <img className={`${styles.imag}`} src={image} alt="" />
    <div className={`${styles.title}`}><b>NOMBRE: </b>{name}</div>


             {(()=>{
   if(status ==="Dead"){
      return <div className={`${styles.badge} badge bg-danger position-absolute fs-5`}>{status}</div>;
   }else if(status ==="Alive"){
      return <div className={`${styles.badge} badge bg-success position-absolute fs-5`}>{status}</div>
   }else{
      return <div className={`${styles.badge} badge bg-secondary  position-absolute fs-5`}>{status}</div>
   }
})()}

<div className={`${styles.description}`}> 

{/* <div className='d-flex gap-3'>Genero: */}

<div className={`${styles.divTable}`}>
<div className={`${styles.divTableBody}`}>
<div className={`${styles.divTableRow}`}>
<div className={`${styles.divTableCell}`}><div>
<div><b>GENERO:</b></div>
</div>
</div>
<div className={`${styles.divTableCell}`}>
<div>
<div>{gender}</div>
</div>
</div>
</div>
<div className={`${styles.divTableRow}`}>
<div className={`${styles.divTableCell}`}><span className='fw-bold'>ESPECIE:</span></div>
<div className={`${styles.divTableCell}`}>{species}</div>
</div>
<div className={`${styles.divTableRow}`}>
<div className={`${styles.divTableCell}`}><span className='fw-bold'>TIPO:</span></div>
<div className={`${styles.divTableCell}`}>{type===""?"Desconocido":type}</div>
</div>
<div className={`${styles.divTableRow}`}>
<div className={`${styles.divTableCell}`}><span className='fw-bold'>UBICACION:</span></div>
<div className={`${styles.divTableCell}`}>{location?.name}</div>
</div>
<div className={`${styles.divTableRow}`}>
<div className={`${styles.divTableCell}`}><span className='fw-bold'>ORIGEN:</span></div>
<div className={`${styles.divTableCell}`}>{origin?.name}</div>
</div>
</div>
</div>

</div>

    </div>
  </div>
// </div>
  )
}

export default CardDetails