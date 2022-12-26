import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  //Aqui Importe los React hooks y Bootstrap
import 'bootstrap/dist/js/bootstrap';
import RoutePub from './Routes/RoutePub'
import Provider from './Components/Context/Provider';
import videoBg from './Components/assets/videoBG/video.mp4';
// import imgBg from './Components/assets/images/rmbg_gif.gif';

function App() {
  return (
<>
<div className="App">     {/* esta linea venia acompañada de todo el Cards */}

{/* <div className='overlay'></div> Por ahora no me sirve*/}
        <video src={videoBg} autoPlay loop playsInline muted/>
        {/* <img className='imgBg' src={imgBg} alt="gif-Bg"/> */}
  <div className='main'>
    
      <div className='content'>
    <Provider>
      <RoutePub/>
    </Provider>
      </div>
      
    </div>
  </div>
</>
  )
}

export default App