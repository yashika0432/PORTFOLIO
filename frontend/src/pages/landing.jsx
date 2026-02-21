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
        <div className="hero">
          <div className="usernames">
            <div className="behance">
              <a href="https://www.behance.net/yashikasharma68" target="_blank">
                Yashikasharma68
              </a>
            </div>
            <div className="insta">
              <a href="https://www.instagram.com/yashika_.04/" target="_blank">
                Yashika_.04
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/yashika-sharma-81110a291/"
                target="_blank"
              >
                Yashika Sharma
              </a>
            </div>
          </div>
        </div>
      </div>
      <Me />
      <Work />
      <Contact />
    </div>
  );
}
