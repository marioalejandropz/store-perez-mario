import React from "react";
// import coin from "../../../assets/icons/coin.svg";
import { uniqueId } from "lodash";
import useFetchGet from "../../../hooks/useFetchGet";

function PurchaseHistory() {
   //Custom Hook
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/user/history`);

   return (
      <div className="products-main-container">
         {(requestData || []).map((products) => {
            return (
               <div key={uniqueId()} className="products-container">
                  <div className="pic-icon-container">
                     {/* <img className="product-pic" key={uniqueId()} src={products.img.hdUrl} alt="" />
                     <div className="missing-coins-container">
                        <img className="missing-coins-icon" src={coin} alt="" />
                     </div> */}
                  </div>
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
         })}
      </div>
   );
}

export default PurchaseHistory;
