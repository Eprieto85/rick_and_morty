// creare unos botones q traen el nombre de cada propiedad al filtro, destruturar las prop
import React from 'react'

// en bootstrap buscamos unos diseños de botones
// voy a destruturar dentro de propiedad con name,index
// voy a destruturar taks y setPageNumber
const FilterBTN = ({name,index,items,task, setPageNumber}) => {
  return (
    <div>{/* Vamos a usar div como clase padre */}
{/* vamos a estilo de escritura */}
    <style jsx>
        {/*el .x: es para el className="form-check-input x" del inpunt, la x al final de este se coloco para llamar el estilo .X:checked esto se activa cuando se comprueba la entrada a la q vamos a apuntar */}
{`
.x:checked+label{
    background-color:#0b5ed7;
    color: white;}

    input[type="radio"]{display:none;}
`}
</style>    
    <div className="form-check">
        {/* Vamos a agregar un onClick */}
    <input 
// quiero q siempre q haga clic en un filtro el index de la pagina empiece en uno,la tarea actualiza el filtro 
    onClick={()=>{
setPageNumber(1);
task(items);
    }}
    className="form-check-input x" type="radio" 
    name={name} id={`${name}-${index}`}
    // este framento del name representa al genero  e index repre cuantos generos son, sera internamente así
    // name=gender
    // gender-0
    // gender-1
    // gender-2
    // es decir index=0,1,2
    />
    {/* aqui ya estamos llamando desde status las etiqtas de forma dinamica */}
    <label className="btn btn-outline-primary" for={`${name}-${index}`}>
        {items}</label>
  </div>
  
  </div>
  )
}

export default FilterBTN
