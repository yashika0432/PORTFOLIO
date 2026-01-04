import React from "react";
import "../style/landing.css";
import Navbar from "../components/navbar";
import Me from "./me";
import Work from "./work";
import Contact from "./contact";

export default function Landing() {
  return (
    <div className="homepage">
      <div className="landingPage">
        <div className="tabbar">
          <img src="/tab icon.png" alt="tab icon" />
        </div>
        <Navbar />
        <div className="hero"></div>
      </div>
      <Me />
      <Work />
      <Contact />
    </div>
  );
}
