import { useEffect, useState } from "react";

function useFetchGet(url) {
   // Hook
   const [requestData, setRequestData] = useState([]);

   useEffect(() => {
      // Api request to get products
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
            setRequestData(res);
            console.log("Request Product:", res);
         } catch (error) {
            console.log(error);
         }
      }
      infoRequest();
   }, [setRequestData, url]);
   return requestData;
}

export default useFetchGet;
