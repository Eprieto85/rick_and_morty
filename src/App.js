import './App.css';
//Aqui Importe los React hooks y Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


// librerias para el login
import Dashboard from './Pages/Dashboard/Dashboard';
// import Login from './Pages/Form/Login';
import Form from './Pages/Form/Form';
import Episodes from './Pages/Episodes';

// vamos a crear de nuevo la funcion App y dentro la declaración de devolucíon
function App() {
  return (
    <div className="App">   
<Router>
        
  <Routes>
    <Route path="/" element={<Form />}/>
    <Route path="*" element={<>Not Found</>}/>
      {/* <Login/>*/}
    <Route path="/dashboard" element={<Dashboard/>}/>

    <Route path="/episodes" element={<Episodes />} />
  </Routes>
</Router>
    </div>
);
}

export default App;
