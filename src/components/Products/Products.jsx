import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import "./Products.css";
import PurchaseHistory from "./components/PurchaseHistory";
import ProductList from "./components/ProductsList";
import { uniqueId } from "lodash";

function Products({ currentProducts }) {
   //Context
   const { points, purchaseHistoryBtn } = useContext(AppContext);

   //Hook
   // const [redeemBtn, setRedeemBtn] = useState(false);
   const [isPending, setIsPending] = useState(false);
   const [isCompleted, setIsCompleted] = useState(false);
   const [error, setError] = useState(null);

   //Redeem products Handler
   const handleSubmit = (id) => {
      setIsPending(true);

      //Post request to redeem products
      async function infoRequest() {
         //Api authentication
         const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
         };
         const request = async () =>
            await fetch(`https://coding-challenge-api.aerolab.co/redeem`, {
               method: "POST",
               headers,
               body: JSON.stringify({ productId: id }),
            });
         try {
            const response = await request();
            if (!response.ok) {
               throw Error("Error! Could not complete the request");
            }
            console.log("response:", response);
            const res = await response.json();
            setIsPending(false);
            setError(null);
            setIsCompleted(true);
            setTimeout(() => {
               setIsCompleted(false);
            }, 5000);
            console.log("Redeem Product:", res);
         } catch (error) {
            setIsPending(false);
            setError(error.message);
            setTimeout(() => {
               setError(null);
            }, 7000);
            setIsCompleted(false);
            console.log(error);
         }
      }
      infoRequest();
   };

   return (
      <div>
         {!purchaseHistoryBtn ? (
            <div className="products-main-container">
               {(currentProducts || []).map((products, i) => {
                  //Find missing coins
                  const missingPoins = (points - products.cost) * -1;
                  return (
                     <ProductList
                        missingPoins={missingPoins}
                        i={i}
                        products={products}
                        isPending={isPending}
                        isCompleted={isCompleted}
                        error={error}
                        handleSubmit={handleSubmit}
                        key={uniqueId()}
                     />
                  );
               })}
            </div>
         ) : (
            <PurchaseHistory />
         )}
      </div>
   );
}

export default Products;
