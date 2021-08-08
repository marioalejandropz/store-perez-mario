import { useEffect, useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function useFetchGet(url, redeemProduct) {
   //Context
   const { setInProgress } = useContext(AppContext);

   // Hook
   const [requestData, setRequestData] = useState([]);

   useEffect(() => {
      // Api request to get available products or products history
      setInProgress(true);
      async function infoRequest() {
         // Api authentication
         const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
         };
         const request = async () => await fetch(url, { headers });
         try {
            const response = await request();
            const res = await response.json();
            setInProgress(false);
            setRequestData(res);
         } catch (error) {
            setInProgress(false);
            console.log(error);
         }
      }
      infoRequest();
   }, [setRequestData, url, redeemProduct, setInProgress]);
   return requestData;
}

export default useFetchGet;
