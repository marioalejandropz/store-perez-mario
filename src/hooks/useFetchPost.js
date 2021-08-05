/*import { useState } from "react";

function useFetchPost(url, id) {
   //Hooks
   const [isPending, setIsPending] = useState(false);
   const [isCompleted, setIsCompleted] = useState(false);
   const [error, setError] = useState(null);

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
         await fetch(url, {
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
   return { isPending, isCompleted, error };
}

export default useFetchPost;
*/
