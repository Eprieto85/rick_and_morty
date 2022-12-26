import React from 'react'
// importamos "styles" ahora nuestras tardjetas tienen mejor aspecto
import styles from './CardChar.module.scss';
// import para llamar el cambio en Details
import {Link} from 'react-router-dom';

const CardChar = ({results,page}) => {
// display nos va mostrar todas las tarjetas, el if else nos verifica q no hay datos vacios 
let display;
// console.log(results)
// asignamos el "results" ahora nos va a crear las tarjetas con la info q pedimos
if(results){
display = results.map((x)=>{
   let {id,name,image,location,status}=x;
   return (
//El className llama algunos estilos nativos qgregados en index.css y del module.scss
      <Link style={{textDecoration:"none"}} to={`${page}${id}`} key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark">
      {/* mb-4 agregado por el hindu */}
      
         <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <div className={`${styles.cards2} d-flex flex-column justify-content-center`}>

   <img src={image} alt="" className={`${styles.img} img-fluid`}/>
            <div style={{padding:"10px"}} className="content">
         <div className="fs-4 fw-bold mb-4">{name}</div>
         <div className="">
            <div className="fs-7">Ultima ubicación</div>
            <div className="fs-6">{location.name}</div>
</div>
         </div>
      </div>
   </div>
{/* Este codigo nos ayuda a traer info del personaje de cada Card, y el className le un aspecto bonito y ordenado */}
{(()=>{
if(status ==="Dead"){
   return (
      <div className={`${styles.badge} badge bg-danger position-absolute`}>
      {status}
      </div>
   )
}
else if(status ==="Alive"){
   return (
      <div className={`${styles.badge} badge bg-success position-absolute`}>
      {status}
      </div>
   )
}
else{
   return (
      <div className={`${styles.badge} badge bg-secondary  position-absolute`}>
      {status}
      </div>
   );
}
})()}
      </Link>
      // me falta antes de esto
   );
});
}else{
display="No se encontro o no existe el personaje :/"
}

return <>{display}</>
}

export default CardChar