import "./RoutePub.css";
import{Route,Routes} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import{About,Login}from  '../Pages/Public'
// import NavbarPub from '../Components/Navbar/NavbarPub'
import Navbar from "../Components/Navbar/Navbar";
import RoutePriv from "./RoutePriv";
import Public from "./Public";
import Private from "./Private";

const RoutePub = () => {
  return (
    <>{/* <Router> */}
    <Navbar/>
    {/* <NavbarPub/> */}
<div className="pages"> {/* puedo usar para poner el fondo */}
      <Routes>
          {/* <Switch> */}
              <Route path="home" element={<Public><Home/></Public>}/>
              <Route path="about" element={<Public><About/></Public>}/>
              <Route path="login" element={<Public><Login/></Public>}/>

              <Route path="/*" element={<Private><RoutePriv/></Private>}/>
          {/* <Switch/> */}  
      </Routes>
</div> 
{/* </Router> */}
    </>
  )
}

export default RoutePub
