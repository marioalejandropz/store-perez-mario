import React, { useContext } from "react";
import "./Pagination.css";
import { AppContext } from "../../contexts/AppContext";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Pagination = () => {
   //Context
   const { requestProduct, setCurrentPage, postPerPage } = useContext(AppContext);

   //Change page
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(requestProduct.length / postPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <>
         {pageNumbers.map((number) => (
            <>
               {number === 2 ? (
                  <img key={number} onClick={() => paginate(number)} src={arrowRight} className="arrow-right arrow" alt="" />
               ) : (
                  <img key={number} onClick={() => paginate(number)} src={arrowLeft} className="arrow-left arrow" alt="" />
               )}
            </>
         ))}
      </>
   );
};

export default Pagination;
