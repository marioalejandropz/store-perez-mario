import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { uniqueId } from "lodash";
import "./Header.css";
import headerPic from "../../assets/header-pics/header-x2.png";
import logo from "../../assets/logo/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

function Header() {
   //Context
   const { requestUser, setRequestUser, points } = useContext(AppContext);

   //Hooks
   const [pointsBtn, setPointsBtn] = useState(false);
   const [addPoints, setAddPoints] = useState("");

   //Handlers
   const handleSubmit = (e) => {
      e.preventDefault();
      setAddPoints(addPoints);

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
               body: JSON.stringify({ amount: addPoints }),
            });
         try {
            const response = await request();
            const res = await response.json();
            console.log(res);
         } catch (error) {
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
            // console.log(res);
         } catch (error) {
            console.log(error);
         }
      }
      infoRequest();
   }, [setRequestUser]);

   return (
      <header>
         <div className="logo-username-container">
            <img className="logo" src={logo} alt="" />
            <div className="username-points-container">
               <div className="username" key={requestUser.id}>
                  {requestUser.name}
               </div>
               <div className="points-container" onClick={() => setPointsBtn(!pointsBtn)}>
                  <div className="points" key={uniqueId()}>
                     {points}
                  </div>
                  <img className="coin-icon" src={coin} alt="" />
               </div>
            </div>
         </div>
         <div className="add-points-picture-container">
            <form onSubmit={handleSubmit} className={`${pointsBtn ? "hide" : "add-points-container"}`}>
               <button className="points-btn" onClick={() => setAddPoints(1000)}>
                  Add 1000
                  <img className="coin-icon" src={coin} alt="" />
               </button>
               <button className="points-btn" onClick={() => setAddPoints(5000)}>
                  Add 5000
                  <img className="coin-icon" src={coin} alt="" />
               </button>
               <button className="points-btn" onClick={() => setAddPoints(7500)}>
                  Add 7500
                  <img className="coin-icon" src={coin} alt="" />
               </button>
            </form>
            <div className="h1-pic-container">
               <h1 className="title">Electronics</h1>
               <img className="header-pic" src={headerPic} alt="" />
            </div>
         </div>
      </header>
   );
}

export default Header;
