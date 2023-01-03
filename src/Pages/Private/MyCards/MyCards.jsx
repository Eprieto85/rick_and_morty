import React from 'react'
import { useNavigate } from 'react-router-dom';

const MyCards = () => {
    const navigate = useNavigate();

  return (
    <div>
<button onClick={()=>navigate("/")} className="btn btn-primary fs-5">Volver</button>
        Aqui Van tarjetas elegidas por el usuario<p/>
        
        - Hay muchos cambios que termine realizando, aunque me ha tomado más tiempo de lo esperado, por eso dejare hasta este punto. Deje pendiente el espacio `My Cards`, este espacio pretendía mostrar una barra de búsqueda adicional, en esta, el usuario busca el personaje que consulta y lo va agregando. Esto permite que se vallan acumulando las tarjetas y muestra una opción que permite también dar un like a cada tarjeta. Este fragmento requiere crear una parte adicional de componentes, pero quiero adelantar otros proyectos por lo cual dejare este proyecto hasta este punto para continuar.
        </div>
  )
}

export default MyCards