import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import coin from "../../../assets/icons/coin.svg";
import { uniqueId } from "lodash";
import buyBlue from "../../../assets/icons/buy-blue.svg";
import buyWhite from "../../../assets/icons/buy-white.svg";
import success from "../../../assets/icons/success.svg";
import errorIcon from "../../../assets/icons/error.svg";

function ProductList({ missingPoins, i, products, isPending, isCompleted, error, handleSubmit }) {
   //Context
   const { buyBtn, setBuyBtn, points } = useContext(AppContext);

   return (
      <div key={uniqueId()} className={`${buyBtn === i ? "products-container-blue" : "products-container"}`}>
         {/* Conditional rendering for redeem now window */}
         {buyBtn !== i ? (
            <div className="pic-icon-container">
               <img className="product-pic" key={uniqueId()} src={products.img.hdUrl} alt="electronic device" />
               {/* Conditional rendering for purchase icon or missing points */}
               {products.cost < points ? (
                  <img className="buy-icon" src={buyBlue} alt="white shopping bag inside a circular blue background" onClick={() => setBuyBtn(i)} />
               ) : (
                  <div className="missing-coins-container">
                     <p className="missing-coins-p">You need {missingPoins}</p>
                     <img className="missing-coins-icon" src={coin} alt="Yellow and circular coin" />
                  </div>
               )}
            </div>
         ) : (
            <div className="redeem-main-container">
               <img className="product-pic" key={uniqueId()} src={products.img.hdUrl} alt="electronic device" />
               <img className="buy-icon" src={buyWhite} alt="Blue shopping bag inside a circular white background" onClick={() => setBuyBtn("")} />
               <div className="reedem-container">
                  <div className="coins-amount-container">
                     <p className="coins-p">{products.cost}</p>
                     <img className="coins-icon" src={coin} alt="Yellow and circular coin" />
                  </div>
                  {/* Conditionals to handle redeem requests and errors */}
                  {!isPending && (
                     <button className="redeem-btn" type="button" onClick={() => handleSubmit(products._id)}>
                        Redeem Now
                     </button>
                  )}
                  {isPending && <button className="redeem-btn">Processing request...</button>}
                  {isCompleted && (
                     <div className="redeem-message-container">
                        <p> Success! </p>
                        <img className="message-icon" src={success} alt="Green check symbol" />
                     </div>
                  )}
                  {error && (
                     <div className="redeem-error-container">
                        <p className="error-p"> {error} </p>
                        <img className="message-icon" src={errorIcon} alt="Red circle with an exclamation mark inside" />
                     </div>
                  )}
               </div>
            </div>
         )}
         <div className="p-container">
            <p className="product-category" key={uniqueId()}>
               {products.category}
            </p>
            <p className="product-name" key={uniqueId()}>
               {products.name}
            </p>
         </div>
      </div>
   );
}

export default ProductList;
