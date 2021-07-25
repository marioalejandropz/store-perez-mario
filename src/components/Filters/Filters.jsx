import React from "react";
import "./Filters.css";
import arrowRight from "../../assets/icons/arrow-right.svg";

function Filters() {
    return (
        <div className="filters-container">
            <div className="amount-products">16 of 32 products</div>
            <div className="vertical-line"></div>
            <p className="sort-by">Sort by</p>
            <button className="btn">Most recent</button>
            <button className="btn">Lowest price</button>
            <button className="btn">Highest price</button>
            <img className="arrow-right-icon" src={arrowRight} alt="" />
        </div>
    );
}

export default Filters;
