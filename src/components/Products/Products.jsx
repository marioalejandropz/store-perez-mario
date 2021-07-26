import React from "react";
import "./Products.css";
import productPic from "../../assets/product-pics/AcerAspire-x2.png";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

function Products() {
    // const needCoinsMessage = () => (isDarkMode ? darkModeLogo : logoDesktop);
    // const redeemNow = () => (isDarkMode ? darkModeLogo : logoDesktop);

    return (
        <div className="products-main-container">
            <div className="products-container">
                <div className="pic-icon-container">
                    <img className="product-pic" src={productPic} alt="" />
                    <img className="buy-icon" src={buyBlue} alt="" />
                    {/* <div className="missing-coins-container">
                        <p className="missing-coins-p">You need 8000</p>
                        <img className="missing-coins-icon" src={coin} alt="" />
                    </div> */}
                </div>
                {/* Reedem version */}
                {/* <div className="redeem-main-container">
                    <img className="product-pic" src={productPic} alt="" />
                    <img className="buy-icon" src={buyWhite} alt="" />
                    <div className="reedem-container">
                        <div className="coins-amount-container">
                            <p className="coins-p">12.000</p>
                            <img className="coins-icon" src={coin} alt="" />
                        </div>
                        <p className="redeem-p">Redeem Now</p>
                    </div>
                </div> */}
                <div className="p-container">
                    <p className="product-category">Categoría</p>
                    <p className="product-name">Nombre del producto</p>
                </div>
            </div>
        </div>
    );
}

export default Products;
