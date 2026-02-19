import "../style/work.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <section className="worksection">
        <div className="access">
          <img src="/work.png" className="leftimg" alt=""></img>
          <img src="/tool.png" className="rightimg" alt=""></img>
        </div>
        <div className="mainsection">
          <div className="uiUx">
            <img src="/arrowUp.png" alt="" className="arrup el"></img>
            <Link to="/posters">
              <img src="/posterwork.png" alt="" className="Poster work"></img>
            </Link>
            <img src="/drop.png" alt="" className="drop el"></img>
            <Link to="/webdev">
              <img src="/webwork.png" alt="" className="Web work"></img>
            </Link>
            <img src="/curve.png" alt="" className="curarr el"></img>
            <img src="/STARS.png" alt="" className="star el"></img>
            <Link to="/appdev">
              <img src="/appwork.png" alt="" className="App work"></img>
            </Link>

            <img src="/arrowDown.png" alt="" className="arrdown el"></img>
            <img src="/zigzag.png" alt="" className="zig el"></img>
            <img src="/lines.png" alt="" className="lines el"></img>
          </div>
          <div className="webdev">
            <h2>Web Dev</h2>
            <div className="websites">
              <div className="card webone">
                <p style={{ color: "white" }}>001.</p>
                <p style={{ color: "black" }}>Wanderlust</p>
              </div>
              <div className="card webtwo">
                <p style={{ color: "white" }}>002.</p>
                <p style={{ color: "black" }}>Zerodha</p>
              </div>
              <div className="card webthree">
                <p style={{ color: "white" }}>003.</p>
                <p style={{ color: "black" }}>VideoCall</p>
              </div>
              <div className="card webfour">
                <p style={{ color: "white" }}>004.</p>
                <p style={{ color: "black" }}>TaskLog</p>
              </div>
              <div className="card webfive">
                <p style={{ color: "white" }}>005.</p>
                <p style={{ color: "black" }}>Simon Game</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
