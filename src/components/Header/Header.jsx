import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { uniqueId } from "lodash";
import "./Header.css";
import headerPic from "../../assets/header-pics/header-x2.png";
import logo from "../../assets/logo/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import success from "../../assets/icons/success.svg";
import errorIcon from "../../assets/icons/error.svg";

function Header() {
   //Context
   const { points, setRequestUser, requestUser, isDarkMode, setIsDarkMode, redeemProduct } = useContext(AppContext);

   //Hooks
   const [pointsBtn, setPointsBtn] = useState(false);
   const [requestPoints, setRequestPoints] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [completedMsg, setCompletedMsg] = useState(false);
   const [addPointsError, setAddPointsError] = useState(null);

   //Add points Handler
   const handleSubmit = (points) => {
      setIsLoading(true);
      //Post request to add points
      async function infoRequest() {
         //Api authentication
         const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
         };
         const request = async () =>
            await fetch(`https://coding-challenge-api.aerolab.co/user/points`, {
               method: "POST",
               headers,
               body: JSON.stringify({ amount: points }),
            });
         try {
            const response = await request();
            if (!response.ok) {
               throw Error("Error! Try again later");
            }
            const res = await response.json();
            setRequestPoints(res);
            setIsLoading(false);
            setCompletedMsg(true);
            setAddPointsError(null);
            setTimeout(() => {
               setCompletedMsg(false);
            }, 5000);
            // console.log("Request Add Points:", res);
         } catch (error) {
            setAddPointsError(error.message);
            setTimeout(() => {
               setAddPointsError(null);
            }, 7000);
            setIsLoading(false);
            setCompletedMsg(false);
            console.log(error);
         }
      }
      infoRequest();
   };

   useEffect(() => {
      //Api request for user info
      async function infoRequest() {
         //Api authentication
         const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
         };
         const request = async () => await fetch(`https://coding-challenge-api.aerolab.co/user/me`, { headers });
         try {
            const response = await request();
            const res = await response.json();
            setRequestUser(res);
            // console.log("Request UserInfo:", res);
         } catch (error) {
            console.log(error);
         }
      }
      infoRequest();
   }, [setRequestUser, requestPoints, redeemProduct]);

   //Alternate between light and dark mode logo
   const showLogo = () => (!isDarkMode ? moon : sun);

   return (
      <header>
         <div className="logo-username-container">
            <div className="logo-darkmode-container">
               <img className="logo" src={logo} alt="" />
               <div className="darkmode-container" onClick={() => setIsDarkMode(!isDarkMode)}>
                  <img className="darkmode-btn" src={showLogo()} alt="" />
               </div>
            </div>
            <div className="username-points-container">
               <div className="username" key={requestUser.id}>
                  {requestUser.name}
               </div>
               <button key={uniqueId()} className="total-points-btn" onClick={() => setPointsBtn(!pointsBtn)}>
                  {points}
                  <img className="coin-icon" src={coin} alt="" />
               </button>
            </div>
         </div>
         <div className="add-points-header-container">
            <div className={`${pointsBtn ? "add-points-container" : "hide-container"}`}>
               <button className="points-btn" type="button" onClick={() => handleSubmit(1000)}>
                  Add 1000
                  <img className="coin-icon" src={coin} alt="" />
               </button>
               <button className="points-btn" type="button" onClick={() => handleSubmit(5000)}>
                  Add 5000
                  <img className="coin-icon" src={coin} alt="" />
               </button>
               <button className="points-btn" type="button" onClick={() => handleSubmit(7500)}>
                  Add 7500
                  <img className="coin-icon" src={coin} alt="" />
               </button>
               {/* Conditionals to handle point requests and errors */}
               {isLoading && (
                  <div className="points-message-container">
                     <p className="points-message">Processing request...</p>{" "}
                  </div>
               )}
               {completedMsg && (
                  <div className="points-message-container">
                     <p className="points-message">Success!</p>
                     <img className="success-icon" src={success} alt="" />
                  </div>
               )}
               {addPointsError && (
                  <div className="points-message-container">
                     <div>
                        <p className="points-message-error">{addPointsError}</p>
                     </div>
                     <div>
                        <img className="error-icon" src={errorIcon} alt="" />
                     </div>
                  </div>
               )}
            </div>
            <div className="h1-pic-container">
               <h1 className="title">Electronics</h1>
               <img className="header-pic" src={headerPic} alt="" />
            </div>
         </div>
      </header>
   );
}

export default Header;
