import React from 'react';
import FilterBTN from '../FilterBTN';

const Status = ({setStatus,setPageNumber}) => {
  //Vamos a crear los estados con un array
  let status =["Alive","Dead","Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Estado
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      {/* d-flex, flex-wrap y gap-3 ordenan el espacio dentro de la celda o div */}
      <div className="accordion-body d-flex flex-wrap gap-3">
{/* vamos a mapear los estados e indexar*/}
    {status.map((items,index)=>(
      // este estado indexa con el circle check del "filterBTN", 
      // vamos a agregar una "task" tarea para actualizar el estado
    <FilterBTN task={setStatus} setPageNumber={setPageNumber} key={index} name="status" index={index} items={items} />
    ))}
      </div>
    </div>
  </div>
  )
}

export default Status