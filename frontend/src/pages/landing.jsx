import React from "react";
import "../style/landing.css";

export default function Landing() {
  return (
    <div className="landingPage">
      <div className="tabbar">
        <img src="/tab icon.png" alt="tab icon" />
      </div>
      <div className="navbar">
        <img src="/vector.png" alt="" style={{ height: "1.5rem" }}></img>
        <h2>|</h2>
        <p>File</p>
        <p>Me</p>
        <p>Work</p>
        <p>Services</p>
        <p>Get-In-Touch</p>
      </div>
      <div className="hero">
        <img src="/HERO.png" alt=""></img>
      </div>
    </div>
  );
}
