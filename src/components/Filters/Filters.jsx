import React from 'react'
// importamos los componentes de cada categoria
import Gender from '../Filters/Category/Gender';
import Species from '../Filters/Category/Species';
import Status from '../Filters/Category/Status';

// vamos a destructurar {setStatus,setPageNumber}
const Filters = ({setStatus,setPageNumber,setGender,setSpecies}) => {
  // window.location borra las selecciones q quedaron activas en los filtros
  let clear =()=>{setStatus("");setPageNumber("");setGender("");setSpecies(""); window.location.reload(false);};
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      {/* boton para limpiar los datos */}
      <div 
// vamos crear onCilck para limpiar los filtros
onClick={clear}
      style={{cursor: 'pointer'}}
      className="text-center text-primary text-decoration-underline mb-4"
      >
        Limpiar Filtros</div>

        <div className="accordion" id="accordionExample">
          {/* botones de categorias */}
  <Status setStatus={setStatus}setPageNumber={setPageNumber}/>
  <Species setSpecies={setSpecies}setPageNumber={setPageNumber}/>
  <Gender setGender={setGender} setPageNumber={setPageNumber}/>
</div>

    </div>
  );
};

export default Filters;