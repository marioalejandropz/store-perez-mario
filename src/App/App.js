import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "./App.css";
import "./darkMode.css";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import useFetchGet from "../hooks/useFetchGet";

function App() {
   //Context
   const { categoryFilter, priceFilter, currentPage, postPerPage, isDarkMode } = useContext(AppContext);

   //Custom Hooks
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/products`);

   //Filter functions for available products
   const filterFunction = () => {
      const filterProducts = requestData
         //Filter by category
         .filter((prod) => {
            if (categoryFilter !== "Category") {
               return categoryFilter === prod.category;
            } else {
               return prod;
            }
         })
         //Filter by price
         .sort((a, b) => {
            if (priceFilter.sort === "Highest price") {
               return b.cost - a.cost;
            } else if (priceFilter.sort === "Lowest price") {
               return a.cost - b.cost;
            }
            return priceFilter;
         });

      return filterProducts;
   };

   const filteredProducts = filterFunction();

   //Pagination - Get current products
   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;
   const availableProducts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

   return (
      // Darkmode condition
      <main className={`App ${isDarkMode ? "darkMode" : "App"}`}>
         <div className="general-container">
            <Header />
            <Filters availableProducts={availableProducts} indexOfLastPost={indexOfLastPost} />
            <Products availableProducts={availableProducts} />
            <Footer indexOfLastPost={indexOfLastPost} availableProducts={availableProducts} />
         </div>
      </main>
   );
}

export default App;
