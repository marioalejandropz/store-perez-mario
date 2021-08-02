import React, { useEffect, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { uniqueId } from "lodash";
import "./Products.css";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

function Products() {
   //Context
   const { points, categoryFilter, priceFilter, buyBtn, setBuyBtn, requestProduct, setRequestProduct, currentPage, postPerPage } =
      useContext(AppContext);

   //Filter functions
   const filterFunctions = () => {
      const filterProducts = requestProduct
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

   const filteredProducts = filterFunctions();

   // useEffect
   useEffect(() => {
      //Api request
      async function infoRequest() {
         //Api authentication
         const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
         };
         const request = async () => await fetch(`https://coding-challenge-api.aerolab.co/products`, { headers });
         try {
            const response = await request();
            const res = await response.json();
            setRequestProduct(res);
         } catch (error) {
            console.log(error);
         }
      }
      infoRequest();
   }, [setRequestProduct]);

   //Pagination - Get current products
   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;
   const currentProducts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

   return (
      <div className="products-main-container">
         {(currentProducts || []).map((products, i) => {
            //Find missing coins
            let missingPoins = (points - products.cost) * -1;
            return (
               <div key={uniqueId()} className={`${buyBtn === i ? "products-container-blue" : "products-container"}`}>
                  {/* conditional rendering for redeem now window */}
                  {buyBtn === i ? (
                     <div className="redeem-main-container">
                        <img className="product-pic" key={uniqueId()} src={products.img.hdUrl} alt="" />
                        <img className="buy-icon" src={buyWhite} alt="" onClick={() => setBuyBtn("")} />
                        <div className="reedem-container">
                           <div className="coins-amount-container">
                              <p className="coins-p">12.000</p>
                              <img className="coins-icon" src={coin} alt="" />
                           </div>
                           <button className="redeem-btn">Redeem Now</button>
                        </div>
                     </div>
                  ) : (
                     <div className="pic-icon-container">
                        <img className="product-pic" key={uniqueId()} src={products.img.hdUrl} alt="" />
                        {/* conditional rendering for missing points */}
                        {products.cost < points ? (
                           <img className="buy-icon" src={buyBlue} alt="" onClick={() => setBuyBtn(i)} />
                        ) : (
                           <div className="missing-coins-container">
                              <p className="missing-coins-p">You need {missingPoins}</p>
                              <img className="missing-coins-icon" src={coin} alt="" />
                           </div>
                        )}
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
         })}
      </div>
   );
}

export default Products;
