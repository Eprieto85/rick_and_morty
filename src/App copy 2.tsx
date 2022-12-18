import 'bootstrap/dist/css/bootstrap.min.css';  //Aqui Importe los React hooks y Bootstrap
import 'bootstrap/dist/js/bootstrap';
// import Form from './Pages/Form/Form';
// import Episodes from './Pages/Episodes';
import { Suspense,lazy } from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router,Route,Navigate} from 'react-router-dom';
import './App.css';
import AuthGuard from './guards/auth.guard';    // librerias para el login
import { PublicRoutes,PrivateRoutes } from "../models";
import store from './Redux/store';
import { RoutesWithNotFound } from './utilities';
import React from 'react';

const Login   =lazy(()=>import('./Pages/Login/Login'));
const Private =lazy(()=>import('./Pages/Private/Private'));

function App() {  // vamos a crear de nuevo la funcion App y dentro la declaración de devolucíon
  return (
    <div className="App">   
     <Suspense fallback={<>Cargando</>}>
      <Provider store={store}>
        <Router>        
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE}/>}/>
            {/* <Route path="*" element={<>Not Found</>}/> mover a private   */}
            <Route path={PublicRoutes.LOGIN} element={<Login/>}/>
            <Route element={<AuthGuard/>}>  
              <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private/>}/>
            </Route>
          {/* <Route path="/episodes" element={<Episodes />} /> */}
        </RoutesWithNotFound>
      </Router>
    </Provider>
  </Suspense>
  </div>
);
}

export default App;
