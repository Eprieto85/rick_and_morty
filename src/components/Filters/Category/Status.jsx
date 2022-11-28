import React from 'react';
import FilterBTN from '../FilterBTN';

const Status = () => {
  //Vamos a crear los estados con un array
  let status =["Alive","Dead","Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Estado
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
{/* vamos a mapear los estados e indexar*/}
    {status.map((items,index)=>(
      // este estado indexa con el circle check del "filterBTN"
    <FilterBTN key={index} name="status" index={index} items={items} />
    ))}
      </div>
    </div>
  </div>
  )
}

export default Status