import React, { useContext } from "react";
import coin from "../../../assets/icons/coin.svg";
import { uniqueId } from "lodash";
import useFetchGet from "../../../hooks/useFetchGet";
import { AppContext } from "../../../contexts/AppContext";

function PurchaseHistory() {
   //Context
   const { categoryFilter, priceFilter, redeemProduct } = useContext(AppContext);

   //Custom Hook to request purchase history
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/user/history`, redeemProduct);

   //Filter functions for purchased products
   const filterFunction = () => {
      const filterProducts = requestData
         //Filter by category
         .filter((prod) => {
            if (categoryFilter !== "Category") {
               return categoryFilter === prod.category;
            } else {
               return prod;
            }
         })
         //Filter by price
         .sort((a, b) => {
            if (priceFilter.sort === "Highest price") {
               return b.cost - a.cost;
            } else if (priceFilter.sort === "Lowest price") {
               return a.cost - b.cost;
            }
            return priceFilter;
         });

      return filterProducts;
   };

   const filteredProducts = filterFunction();

   const currentDate = new Date();
   const timeWindow = new Date(currentDate.setDate(currentDate.getDate() - 2));
   //Function to render only the products redeemed during the last 2 days,
   //because the info that comes from the API contains thousands of redeemed products.
   const redeemedProducts = filteredProducts.filter((e) => {
      const d = new Date(e.createDate);
      return d.getTime() > timeWindow;
   });

   return (
      <div className="products-main-container">
         {(redeemedProducts || []).map((products) => {
            return (
               <div key={uniqueId()} className="products-container">
                  <div className="pic-icon-container">
                     <img className="product-pic" key={uniqueId()} src={products.img.hdUrl} alt="electronic device" />
                     <div className="missing-coins-container">
                        <p className="coins-p-history">{products.cost}</p>
                        <img className="missing-coins-icon" src={coin} alt="Yellow and circular coin" />
                     </div>
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
