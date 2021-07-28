import React from "react";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <div className="App">
         <AppProvider>
            <Header />
            <Filters />
            <Products />
            <Footer />
         </AppProvider>
      </div>
   );
}

export default App;
