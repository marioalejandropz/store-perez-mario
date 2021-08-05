import React, { useState, createContext } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
   //Hooks
   const [requestUser, setRequestUser] = useState([]);
   const [purchaseHistoryBtn, setPurchaseHistoryBtn] = useState(false);
   const [buyBtn, setBuyBtn] = useState("");

   // User points
   const points = requestUser.points - 7410630 || "";

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
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
