import React from "react";
import "./Footer.css";
import Pagination from "../../utils/components/Pagination";

function Footer() {
   return (
      <footer>
         <div className="amount-products">16 of 32 products</div>
         <div className="arrow-icons-container">
            <Pagination />
         </div>
      </footer>
   );
}

export default Footer;
