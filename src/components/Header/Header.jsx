import React from "react";
import "./Header.css";
import headerPic from "../../assets/header-pics/header-x2.png";
import logo from "../../assets/logo/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

function Header() {
    return (
        <header>
            <div className="logo-username-container">
                <img className="logo" src={logo} alt="" />
                <div className="username-points-container">
                    <div className="username">Alejoperez86</div>
                    <div className="points-container">
                        <div className="points">3500</div>
                        <img className="coin-icon" src={coin} alt="" />
                    </div>
                </div>
            </div>
            <div className="h1-pic-container">
                <h1 className="title">Electronics</h1>
                <img className="header-pic" src={headerPic} alt="" />
            </div>
        </header>
    );
}

export default Header;
