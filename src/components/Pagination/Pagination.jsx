import React,{useState,useEffect}  from 'react'
import ReactPaginate from 'react-paginate';

//desestructura las propiedades
const Pagination = ({ info,pageNumber,setPageNumber }) => {

//permite renderizar el ancho de de la barra de paginacion
let [width, setWidth]=useState(window.innerWidth);
let updateDimensions=()=>{
  setWidth(window.innerWidth);
};
//useEffect usado para adaptar el tamaño de la barra paginación
useEffect(()=>{
  window.addEventListener('resize', updateDimensions);
  return ()=>window.removeEventListener('resize', updateDimensions);
},[]);
return (
<>
  <style jsx>
  {`
     a {
       color: white; text-decoration: none;
     }
     @media (max-width: 768px) {
       .pagination {font-size: 12px}
       
       .next,
       .prev {display: none}
      }
      @media (max-width: 768px) {
       .pagination {font-size: 14px}
     }
   `}
   </style>
   {/* usamos los estilos basicos con react-paginate */}
<ReactPaginate 
  className='pagination justify-content-center my-4 gap-4'
  nextLabel="Sig"
  nextClassName="btn btn-primary fs-5 next"
  previousLabel="Ant"
  previousClassName="btn btn-primary fs-5 prev"
  activeClassName='active'
  pageClassName='page-item'
  pageLinkClassName='page-link'
  onPageChange={(data)=>{
    setPageNumber(data.selected+1);
  }}
  pageCount={info?.pages}
// funcionalidades el react-paginate
forcePageChange={pageNumber===1?0:pageNumber-1}
marginPagesDisplayed={width<576?1:2}
pageRangeDisplayed={width<576?1:2}
// onPageChange={onPageChange}

  />
  {/* estamos dentro de la declaración de devolución donde agregamos estilos especificos con jsx */}
  </>
);
};

export default Pagination