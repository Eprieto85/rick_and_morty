import { useContext } from "react"
import { Navigate } from "react-router-dom";
import Context from "../Components/Context/Context"

const Private = ({children}) => {
    const {logeado}=useContext(Context);
  return (logeado)
  ? children : <Navigate to="/login"/>
}

export default Private