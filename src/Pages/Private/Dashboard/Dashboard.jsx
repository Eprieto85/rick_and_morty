import React from 'react';
// import styles from './Dashboard.css';
import './Dashboard.css';

const Dashboard = () => {

  return (
   
    <div className="d-flex ubuntu justify-content-center fs-5 mb-4 conbg">
    {/* // Este es mi "return statement" elimine todo y creo desde cero style={{ padding: '25px' }}->se borro del div  */}
<div className="App text-center ubuntu ">

<h1 className="text-center mb-4 " >Gracias por llegar hasta aquí!!{/* Personajes */}</h1>
<h1 className="text-center ubuntu my-1">Te explicare rapidamente el contenido de este tablero</h1>
<p></p>
<div className="container">
<div className='row'>

<div className="col-2 cardPub ">

  {/* <a title="Curso Barista" href='https://go.hotmart.com/L77323984K'> */}
  <a title="Curso Barista" href='./Fpublic'>
  <img className='cardImg' src='http://drive.google.com/uc?export=view&id=1eOkD4ky_w89YJtC2SfwaYHhIQAGvHSpU' alt="" />
    </a>

<div className="card-info"><p className="text-title">Curso Barista</p><p className="text-body">¿Sabías que el café es uno de los productos más comercializados del mundo y una de las tres bebidas más consumidas?</p> <span className='text-primary'>Descuento haciendo clic en el carrito</span></div>

    <div className="card-footer">
      <span className="text-title ">USD 99.99</span>
      <div className="card-button" >
      <a title="Curso Barista" href='./Fpublic'>
    <svg className="svg-icon" viewBox='0 0 20 20'><path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
</svg></a>
      </div>
    </div>

</div>

 <div className="col-lg-8 col-12 recPub">
     <div className="row">Esta es un área privada, para un proyecto en el cual, el cliente desee que sus usuarios registrados configuren o guarden en su espacio determinadas características. En este ejemplo tenemos 5 espacios. <p/>
     <p> <button type='button' className='btn btn-info'>My Cards:</button> Es un espacio donde el usuario busca las cartas de sus personajes la serie Rick and Morty, puede agregar un "Like o Me gusta", puede eliminar las cartas q ya no quiere tener en su espacio, pero en este ejemplo, la información solo aparecerá mientras la sesión del usuario este activa. En todas las áreas, al hacer clic sobre cualquiera de las tarjetas se mostrara una descripción adicional del personaje. </p>
     <p> <button type='button' className='btn btn-info'>Cards</button> Este espacio permite buscar por nombre los personajes que te llamen la atención, mientras escribes el tablero mostrara los personajes relacionados con la búsqueda. </p>
     <p> <button type='button' className='btn btn-info'>Episodes</button> Es una compilación de los personajes que aparecen en cada uno de los capítulos emitidos en la serie. </p>
     <p> <button type='button' className='btn btn-info'>Location</button> Aqui veras cada uno de los mundos paralelos, entre los cuales se desplazan los personajes de esta historia, a lo largo de disparatadas y divertidas aventuras. </p> 

     <br/>
</div>
          otra Publicidad Aqui
</div>
  </div>
    </div>
      </div>
        </div>
  )
}
export default Dashboard