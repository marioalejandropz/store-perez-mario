import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { uniqueId } from "lodash";
import "./Products.css";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

function Products() {
   //Context
   const { points } = useContext(AppContext);

   //States
   const [requestProduct, setRequestProduct] = useState([]);
   const [buyBtn, setBuyBtn] = useState("");

   //Handlers
   // const buyBtnHandler = (i) => {
   //    setBuyBtn(i);
   // };

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
            // console.log(res);
         } catch (error) {
            console.log(error);
         }
      }
      infoRequest();
   }, [setRequestProduct]);

   return (
      <div className="products-main-container">
         {(requestProduct || []).map((products, i) => {
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
                           <button className="redeem-p">Redeem Now</button>
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
