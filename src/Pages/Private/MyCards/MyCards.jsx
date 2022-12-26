import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyCards = () => {
    const navigate = useNavigate();

  return (
    <div>
<button onClick={()=>navigate("/")} className="btn btn-primary fs-5">Volver</button>
        Aqui Van tarjetas elegidas por el usuario
        </div>
  )
}

export default MyCards