import React,{useState,useEffect}  from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info,pageNumber,setPageNumber }) => {

const [width, setWidth]=useState(window.innerWidth);
const updateDimensions=()=>{
  setWidth(window.innerWidth);
};
useEffect(()=>{
  window.addEventListener('resize', updateDimensions);
  return ()=>window.removeEventListener('resize', updateDimensions);
},[]);

  // let next=()=>{//Ya no se usara esta forma de paginación
    //     setPageNumber((x)=>x+1)
    // };
    // let prev=()=>{
    //     if(pageNumber===1)return;
    //     setPageNumber((x)=>x-1)
    // };

//   return (      //Estos div vienen de la paginación q ya no se usara
//   // <div className='container d-flex justify-content-center gap-5 my-5'>
//   //   <div onClick={prev} className="button btn btn-primary">Prev</div>
//   //   <div onClick={next} className="button btn btn-primary">Next</div>
//   // </div>

  
//   );

return (
<>
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

forcePageChange={pageNumber===1?0:pageNumber-1}
marginPagesDisplayed={width<576?1:2}
pageRangeDisplayed={width<576?1:2}
// onPageChange={onPageChange}

  />
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
  </>
);


};

export default Pagination
