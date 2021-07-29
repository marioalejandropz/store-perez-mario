import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   //states
   const [requestProduct, setRequestProduct] = useState([]);
   const [requestUser, setRequestUser] = useState([]);
   const [categoryFilter, setCategoryFilter] = useState("Category");
   const [priceFilter, setPriceFilter] = useState("Price");

   //User points
   let points = requestUser.points - 7410630 || "";

   return (
      <AppContext.Provider
         value={{
            requestProduct,
            setRequestProduct,
            requestUser,
            setRequestUser,
            points,
            categoryFilter,
            setCategoryFilter,
            priceFilter,
            setPriceFilter,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
