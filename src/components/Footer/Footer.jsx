import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Footer.css";
import Pagination from "../../utils/components/Pagination/Pagination";
import useFetchGet from "../../hooks/useFetchGet";

function Footer({ currentProducts, indexOfLastPost }) {
   //Context
   const { categoryFilter } = useContext(AppContext);

   //Custom Hooks
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/products`);

   return (
      <footer>
         <div className="amount-container">
            <div className="amount-products-footer">
               {categoryFilter !== "Category" ? (
                  <div className="amount-products">
                     {currentProducts.length} of {currentProducts.length} products
                  </div>
               ) : (
                  <div className="amount-products">
                     {indexOfLastPost} of {requestData.length} products
                  </div>
               )}
            </div>
            {currentProducts.length < 16 ? <></> : <Pagination />}
         </div>
      </footer>
   );
}

export default Footer;
