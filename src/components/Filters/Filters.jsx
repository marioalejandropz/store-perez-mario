import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Filters.css";
import Pagination from "../../utils/components/Pagination/Pagination";
import useFetchGet from "../../hooks/useFetchGet";

function Filters({ availableProducts, indexOfLastPost }) {
   //Context
   const { setPurchaseHistoryBtn, purchaseHistoryBtn, categoryFilter, setCategoryFilter, setPriceFilter } = useContext(AppContext);

   //Custom Hook
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/products`);

   // console.log("availableProducts:", availableProducts);

   return (
      <div className="filters-container">
         <div className={`${purchaseHistoryBtn ? "hide-amount" : ""}`}>
            {categoryFilter !== "Category" ? (
               <div className="amount-products text">
                  {availableProducts.length} of {availableProducts.length} products
               </div>
            ) : (
               <div className="amount-products">
                  {indexOfLastPost} of {requestData.length} products
               </div>
            )}
         </div>

         <div className="vertical-line"></div>
         <p className="sort-by">Sort by:</p>
         <select className="filter" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="Category">Category</option>
            <option value="Phones">Phones</option>
            <option value="Gaming">Gaming</option>
            <option value="Laptops">Laptops</option>
            <option value="Cameras">Cameras</option>
            <option value="Audio">Audio</option>
            <option value="Monitors & TV">Monitors & TV</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Drones">Drones</option>
            <option value="Phone Accessories">Phone Accessories</option>
            <option value="PC Accessories">PC Accessories</option>
            <option value="Tablets & E-readers">Tablets & E-readers</option>
         </select>
         <select className="filter" onChange={(e) => setPriceFilter({ sort: e.target.value })}>
            <option value="Price">Price</option>
            <option value="Lowest price">Lowest price</option>
            <option value="Highest price">Highest price</option>
         </select>
         <div className="vertical-line"></div>
         {!purchaseHistoryBtn ? (
            <button className="purchase-history-btn filter" onClick={() => setPurchaseHistoryBtn(!purchaseHistoryBtn)}>
               Purchase History
            </button>
         ) : (
            <button className="purchase-history-btn filter" onClick={() => setPurchaseHistoryBtn(!purchaseHistoryBtn)}>
               Available Products
            </button>
         )}
         {availableProducts.length < 16 || purchaseHistoryBtn ? <></> : <Pagination />}
      </div>
   );
}

export default Filters;
