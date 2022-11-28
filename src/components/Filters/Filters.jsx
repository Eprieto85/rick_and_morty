import React from 'react'
// importamos los componentes de cada categoria
import Gender from '../Filters/Category/Gender';
import Species from '../Filters/Category/Species';
import Status from '../Filters/Category/Status';

const Filters = () => {
  return (
    <div className='col-3'>
      <div className="text-center fw-bold fs-4 mb-2">Filtros</div>
      {/* boton para limpiar los datos */}
      <div 
      style={{cursor: 'pointer'}}
      className="text-center text-primary text-decoration-underline mb-4"
      >
        Limpiar Filtros</div>

        <div className="accordion" id="accordionExample">
          {/* botones de categorias */}
  <Status/>
  <Species/>
  <Gender/>
</div>

    </div>
  );
};

export default Filters;