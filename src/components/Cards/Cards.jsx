// import Card from '../Card/Card';


// Este era un componente q a traves de busqeda traia una sola tarjeta, pero lo vamos cambiar para dar un mejor contexto
// export default function Cards(props) {
   // const { characters, onClose } = props;

//    return (
//       <div style={{display:'flex', justifyContent:'center'}}>
//          {characters.map((character) =>( 
//             <Card 
//             key={character.id}
//             id={character.id}
//             detailId={character.id}
//                name={character.name}
//                species={character.species}
//                gender={character.gender}
//                image={character.image}
//                onClose={onClose}
//             />
//          ))}
//       </div>
//    );
// }

import React from 'react';
// importamos "styles" ahora nuestras tardjetas tienen mejor aspecto
import styles from './Cards.module.scss';
// import para llamar el cambio en Details
import {Link} from 'react-router-dom';

// desestructuramos los datos q vienen de "App.js"
const Cards = ({results,page}) => {
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
               <img src={image} alt="" className={`${styles.img} img-fluid`}/>
               <div style={{padding:"10px"}} className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
               <div className="fs-6">Ultima ubicación</div>
               <div className="fs-5">{location.name}</div>
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
      );
   });
}else{
   display="No se encontro el personaje :/"
}

  return <>{display}</>
}

export default Cards
