import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Filters />
            <Products />
            <Footer />
        </div>
    );
}

export default App;
