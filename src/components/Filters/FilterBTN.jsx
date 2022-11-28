// creare unos botones q traen el nombre de cada propiedad al filtro, destruturar las prop
import React from 'react'

// en bootstrap buscamos unos diseños de botones
// voy a destruturar dentro de propiedad con name,index
const FilterBTN = ({name,index,items}) => {
  return (
    
    <div>{/* Vamos a usar div como clase padre */}
        
    <div className="form-check">
    <input 
    className="form-check-input" 
    type="radio" name={name} 
    id={`${name}-${index}`}
    // este framento del name representa al genero  e index repre cuantos generos son, sera internamente así
    // name=gender
    // gender-0
    // gender-1
    // gender-2
    // es decir index=0,1,2
    />
    {/* aqui ya estamos llamando desde status las etiqtas de forma dinamica */}
    <label className="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
  </div>
  
  </div>
  )
}

export default FilterBTN
