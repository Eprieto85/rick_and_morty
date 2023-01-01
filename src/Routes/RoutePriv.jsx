import "./RoutePub.css";
import{Navigate, Route,Routes} from 'react-router-dom'
import{Dashboard,Cards,Episodes,Location}from  '../Pages/Private'
import CardDetails from "../Components/CardChar/CardDetails/CardDetails";
import MyCards from "../Pages/Private/MyCards/MyCards";
import Fpublic from "../Pages/Private/Fpublic/Fpublic";
// import Navbar from '../Components/Navbar/Navbar'

const RoutePriv = () => {
  return (
    <>{/* <Router> */}{/* <NavbarPriv/> */}
<div className=""> {/* className="pages" puedo usar para poner el fondo */}
      <Routes>
          {/* <Switch> */}
              <Route path="dashboard"element={<Dashboard/>}/>
              
              <Route path="cards"    element={<Cards/>}/>
              <Route path="/:id"     element={<CardDetails/>}/>
              <Route path="/cards/:id"     element={<CardDetails/>}/> {/* De pronto esta me toca eliminar */}
              
              <Route path="mycards"    element={<MyCards/>}/>

              <Route path="episodes" element={<Episodes/>}/>
              <Route path="/episodes/:id"     element={<CardDetails/>}/>

              <Route path="location" element={<Location/>}/>
              <Route path="/location/:id"     element={<CardDetails/>}/>
{/* espacio publicitario con iframe */}
              <Route path="fpublic"    element={<Fpublic/>}/>
{/* espacio publicitario con iframe */}
              <Route path="/" element={<Navigate to="dashboard"/>}/>
          {/* <Switch/> */}  
      </Routes>
</div> 
{/* </Router> */}
    </>
  )
}

export default RoutePriv