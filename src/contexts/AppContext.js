import React, { useState, createContext } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
   //Hooks
   const [requestUser, setRequestUser] = useState([]);
   const [purchaseHistoryBtn, setPurchaseHistoryBtn] = useState("");
   const [buyBtn, setBuyBtn] = useState("");
   const [categoryFilter, setCategoryFilter] = useState("Category");
   const [priceFilter, setPriceFilter] = useState("Price");
   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage] = useState(16);

   // User points
   const points = requestUser.points - 7447930 || "";

   return (
      <AppContext.Provider
         value={{
            requestUser,
            setRequestUser,
            buyBtn,
            setBuyBtn,
            points,
            purchaseHistoryBtn,
            setPurchaseHistoryBtn,
            categoryFilter,
            setCategoryFilter,
            priceFilter,
            setPriceFilter,
            currentPage,
            setCurrentPage,
            postPerPage,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
