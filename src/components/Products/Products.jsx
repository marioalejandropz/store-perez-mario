import React, { useEffect, useState } from "react";
import "./Products.css";
// import productPic from "../../assets/product-pics/AcerAspire-x2.png";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

function Products() {
   // const needCoinsMessage = () => (isDarkMode ? darkModeLogo : logoDesktop);
   // const redeemNow = () => (isDarkMode ? darkModeLogo : logoDesktop);

   //Hooks
   const [searchProducts, setSearchProducts] = useState([]);

   //Api authentication

   // useEffect
   useEffect(() => {
      // if (searchBtn && keyword.length > 0) {
      //Api request
      async function infoRequest() {
         //Authorization
         const headers = {
            "Content-Type": "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
         };

         const request = async () => await fetch(`https://coding-challenge-api.aerolab.co/products`, { headers });

         try {
            // setIsLoading(true);
            // setResultsMessage(true);
            const response = await request();
            const res = await response.json();
            // setSearchBtn(false);
            // setIsLoading(false);
            setSearchProducts(res);
            // console.log(res);
         } catch (error) {
            // setSearchBtn(false);
            // setIsLoading(false);
            // setResultsMessage(false);
            console.log(error);
         }
         // }
      }
      infoRequest();
   }, [setSearchProducts]);

   return (
      <div className="products-main-container">
         {(searchProducts || []).map((products) => {
            return (
               <div className="products-container">
                  <div className="pic-icon-container">
                     <img className="product-pic" src={products.img.hdUrl} alt="" />
                     <img className="buy-icon" src={buyBlue} alt="" />
                     {/* <div className="missing-coins-container">
                                    <p className="missing-coins-p">You need {products.cost-cantidad de points}</p>
                                    <img className="missing-coins-icon" src={coin} alt="" />
                                </div> */}
                  </div>
                  {/* Reedem version */}
                  {/* <div className="redeem-main-container">
                                <img className="product-pic" src={productPic} alt="" />
                                <img className="buy-icon" src={buyWhite} alt="" />
                                <div className="reedem-container">
                                    <div className="coins-amount-container">
                                        <p className="coins-p">12.000</p>
                                        <img className="coins-icon" src={coin} alt="" />
                                    </div>
                                    <p className="redeem-p">Redeem Now</p>
                                </div>
                            </div> */}
                  <div className="p-container">
                     {console.log("searchProducts1")}
                     {console.log(products.img.hdUrl)}
                     <p className="product-category">{products.category}</p>
                     <p className="product-name">{products.name}</p>
                  </div>
               </div>
            );
         })}
      </div>
   );
}

export default Products;
