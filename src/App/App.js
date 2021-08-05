import React, { useState } from "react";
import { AppProvider } from "../contexts/AppContext";
import "./App.css";
import Header from "../components/Header/Header";
import Filters from "../components/Filters/Filters";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";
import useFetchGet from "../hooks/useFetchGet";

function App() {
   //Hooks
   const [categoryFilter, setCategoryFilter] = useState("Category");
   const [priceFilter, setPriceFilter] = useState("Price");
   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage] = useState(16);

   //Custom Hooks
   const requestData = useFetchGet(`https://coding-challenge-api.aerolab.co/products`);

   //Filter functions
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
   const currentProducts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost);

   return (
      <div className="App">
         <AppProvider>
            <Header />
            <Filters
               categoryFilter={categoryFilter}
               setCategoryFilter={setCategoryFilter}
               setPriceFilter={setPriceFilter}
               currentProducts={currentProducts}
               setCurrentPage={setCurrentPage}
               postPerPage={postPerPage}
               indexOfLastPost={indexOfLastPost}
            />
            <Products filteredProducts={filteredProducts} currentProducts={currentProducts} />
            <Footer
               indexOfLastPost={indexOfLastPost}
               categoryFilter={categoryFilter}
               currentProducts={currentProducts}
               setCurrentPage={setCurrentPage}
               postPerPage={postPerPage}
            />
         </AppProvider>
      </div>
   );
}

export default App;
