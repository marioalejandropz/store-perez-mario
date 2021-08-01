import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   //states
   const [requestProduct, setRequestProduct] = useState([]);
   const [requestUser, setRequestUser] = useState([]);
   const [categoryFilter, setCategoryFilter] = useState("Category");
   const [priceFilter, setPriceFilter] = useState("Price");
   const [filteredInfo, setFilteredInfo] = useState([]);
   //--------------------------------------
   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage, setPostPerPage] = useState(16);

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
            filteredInfo,
            setFilteredInfo,
            currentPage,
            setCurrentPage,
            postPerPage,
            setPostPerPage,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
