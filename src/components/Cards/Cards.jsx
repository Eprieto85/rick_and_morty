// import Card from '../Card/Card';

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

import React from 'react'
import styles from './Cards.module.scss';

const Cards = ({results}) => {
   let display;
   console.log(results)

if(results){
   display = results.map((x)=>{
      let {id,name,image,location,status}=x;
      return (
         <div key={id} className="col-lg-4 mb-4 col-md-6 col-sm-6 col-12 position-relative text-dark"> 
         {/* mb-4 agregado por el hindu */}
            <div className={styles.cards}>
               <img src={image} alt="" className={`${styles.img} img-fluid`}/>
               <div style={{padding:"10px"}} className="content">
            <div className="fs-4 fw-bold mb-4">{name}</div>
            <div className="">
               <div className="fs-6">Ultima ubicación</div>
               <div className="fs-5">{location.name}</div>
            </div>
         </div>
      </div>
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
         </div>
      );
   });
}else{
   display="No se encontro el personaje :/"
}

  return <>{display}</>
}

export default Cards
