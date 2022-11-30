import React from 'react'

const InputGroup = ({total,name,setId}) => {
    // quiero ver todos los datos de numero de pag
    // console.log([...Array(total).keys()]);
  return (
<div class="input-group mb-3">
  
  <select onChange={(e)=>setId(e.target.value)} class="form-select" id={name}>
    <option value="1" selected>Choose...</option>
    {/* Vamos a mapear el total de los resultados para crear la lista de selección */}
    {[...Array(total).keys()].map(x=>{
        return(
    <option value={x+1}>{name}{x+1}</option>
        )
    })}
  </select>
</div>
  )
}

export default InputGroup
