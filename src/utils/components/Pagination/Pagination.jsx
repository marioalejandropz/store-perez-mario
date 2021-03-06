import React, { useContext } from "react";
import "./Pagination.css";
import { AppContext } from "../../../contexts/AppContext";
import arrowLeft from "../../../assets/icons/arrow-left.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
import { uniqueId } from "lodash";
import useFetchGet from "../../../hooks/useFetchGet";

const Pagination = () => {
   //Context
   const { setBuyBtn, setCurrentPage, postPerPage } = useContext(AppContext);

   //Custom Hook
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/products`);

   //Function to change page
   const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      setBuyBtn("");
   };

   const pageNumbers = [];

   //Divide the total products requested for the posts per page defined
   for (let i = 1; i <= Math.ceil(requestData.length / postPerPage); i++) {
      pageNumbers.push(i);
   }

   return (
      <>
         {pageNumbers.map((number) => (
            <div key={uniqueId()} className="arrows-container">
               {number === 2 ? (
                  <img
                     key={number}
                     onClick={() => paginate(number)}
                     src={arrowRight}
                     className="arrow-right arrow"
                     alt="Arrow inside a circle pointing right"
                  />
               ) : (
                  <img
                     key={number}
                     onClick={() => paginate(number)}
                     src={arrowLeft}
                     className="arrow-left arrow"
                     alt="Arrow inside a circle pointing left"
                  />
               )}
            </div>
         ))}
      </>
   );
};

export default Pagination;
