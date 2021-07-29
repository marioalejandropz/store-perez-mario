import React, { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { uniqueId } from "lodash";
import "./Header.css";
import headerPic from "../../assets/header-pics/header-x2.png";
import logo from "../../assets/logo/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

function Header() {
   //Context
   const { requestUser, setRequestUser, points } = useContext(AppContext);

   //States

   // useEffect
   useEffect(() => {
      //Api request
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
               <div className="points-container">
                  <div className="points" key={uniqueId()}>
                     {points}
                  </div>
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
