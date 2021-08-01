import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Filters.css";
import Pagination from "../../utils/components/Pagination";

function Filters() {
   //Context
   const { categoryFilter, setCategoryFilter, setPriceFilter } = useContext(AppContext);

   return (
      <div className="filters-container">
         <div className="amount-products">16 of 32 products</div>
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
         <select className="filter-price filter" onChange={(e) => setPriceFilter({ sort: e.target.value })}>
            <option value="Price">Price</option>
            <option value="Lowest price">Lowest price</option>
            <option value="Highest price">Highest price</option>
         </select>
         <Pagination />
      </div>
   );
}

export default Filters;
