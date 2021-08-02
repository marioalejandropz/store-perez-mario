import React, { useContext } from "react";
import "./Footer.css";
import { AppContext } from "../../contexts/AppContext";
import Pagination from "../../utils/components/Pagination";

function Footer() {
   //context
   const { currentPage } = useContext(AppContext);

   return (
      <footer>
         <div className="amount-container">
            <div className="amount-products-footer">
               {currentPage === 1 ? (
                  <div className="amount-products">16 of 32 products</div>
               ) : (
                  <div className="amount-products">32 of 32 products</div>
               )}
            </div>
            <Pagination />
         </div>
      </footer>
   );
}

export default Footer;
