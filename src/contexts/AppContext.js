import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   //states
   // const [request, setRequest] = useState([]);
   const [requestUser, setRequestUser] = useState([]);
   let points = requestUser.points - 7410630;

   //    const [isDarkMode, setIsDarkMode] = useState(false);
   //    const [keyword, setKeyword] = useState("");

   return (
      <AppContext.Provider
         value={{
            // request,
            // setRequest,
            requestUser,
            setRequestUser,
            points,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
