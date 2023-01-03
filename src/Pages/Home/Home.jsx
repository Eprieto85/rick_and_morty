// import styles from './Home.module.css';
import imgIng from '../../Components/assets/videoBG/videoIngles.gif';
import './Home.css';

const Home = () => {
  return (
    
    <div className="d-flex ubuntu justify-content-center fs-5 mb-4 conbg">
    {/* // Este es mi "return statement" elimine todo y creo desde cero style={{ padding: '25px' }}->se borro del div  */}
<div className="App text-center ubuntu ">

<h1 className="text-center mb-4">Este es un prototipo de diseño JavaScript & React!!{/* Personajes */}</h1>
<h1 className="text-center ubuntu my-1">Gracias por su interés en conocer un poco de más sobre mi labor. </h1>
<p></p>
<div className="container">
<div className='row'>

<div className="col-2 cardPub ">

  <a title="Curso Ingles" href='./Hotmart'>
  <img className='cardImg' src={imgIng} alt="" />
    </a>

<div className="card-info"><p className="text-title">Curso Ingles RAIO</p><p className="text-body"> Esta será la última inversión en un curso de <b>Inglés</b> que hagas en tu vida. Tendrás acceso de por vida, para que vayas a tu propio ritmo y horario y, al terminar el programa, recibirás un certificado firmado. </p> <span className='text-primary'>Descuento haciendo clic en el carrito</span></div>

    <div className="card-footer">
      <span className="text-title ">USD 5,382</span>
      <div className="card-button" >
      <a title="Curso Ingles RAIO" href='./Hotmart'>
    <svg className="svg-icon" viewBox='0 0 20 20'><path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
</svg></a>
      </div>
    </div>

</div>

 <div className="col-lg-8 col-12 recPub">
     <div className="row">Este es un proyecto realizado con JavaScript, el objetivo de esta App es mostrar un avance en mis habilidades como programador, y a través de este vender mi experiencia en nuevos proyectos, al igual que promociono cursos que me ayudan a obtener pequeños ingresos. <p/>
     <p> <button type='button' className='btn btn-warning'>Sobre mí:</button> En el menú <b>"About"</b> encontraras más información sobre mi perfil laboral, a través de un pequeño desarrollo, se ve un corto perfil como desarrollador, el cual cuenta con enlaces al portal GitHub el cual es un contenedor de todos los proyectos que voy desarrollando y que en este se almacenan como evidencia de mi Perfil profesional. En este también se encuentra mi correo y enlace a Linkedin, este último es una página que contiene mi hoja de vida más formal. </p>
     <p> <button type='button' className='btn btn-warning'>Login:</button> La página tiene acceso a una zona privada, siempre la <b>"App"</b> procura dirigir al login para ingresar los datos que se muestran a través del mensaje y la cual debería permitir la privacidad de los datos almacenados en el tablero personal del usuario, y solo se podrá acceder si el usuario esta logeado. </p>
     
<p/>
</div>
      Animación, solo para llenar espacios!!
          <div className="contenedor col-lg-8 col-12">
	<div className="loadert"></div>
	<div className="loadert"></div>
	<div className="loadert"></div>
        </div>
        <p/><br/><p/>  <br/><p/><br/>
        Animación, solo para llenar espacios!!
</div>
  </div>
    </div>
      </div>
        </div>     
 )
}

export default Home