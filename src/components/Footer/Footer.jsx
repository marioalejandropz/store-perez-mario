import React from "react";
import "./Footer.css";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

function Footer() {
   return (
      <footer>
         <div className="amount-products">16 of 32 products</div>
         <div className="arrow-icons-container">
            <img className="arrow-left-footer arrow" src={arrowLeft} alt="" />
            <img className="arrow-right-footer arrow" src={arrowRight} alt="" />
         </div>
      </footer>
   );
}

export default Footer;
