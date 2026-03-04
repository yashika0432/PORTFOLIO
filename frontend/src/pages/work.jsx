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
              <div className="webcard webone">
                <p style={{ color: "white" }}>001.</p>
                <p style={{ color: "black" }}>Wanderlust</p>
                <p
                  className="infopara"
                  style={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "white",
                    fontWeight: "400",
                    width: "40%",
                  }}
                >
                  This is a online hotel/BNB booking site inspired from Airbnb.
                  With login and signup features for the user as well as for a
                  host.<br></br> GitRepo:
                  <a
                    href="https://github.com/yashika0432/WANDERLUST"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    https://github.com/yashika0432/WANDERLUST
                  </a>
                </p>
              </div>
              <div className="webcard webtwo">
                <p style={{ color: "white" }}>002.</p>
                <p style={{ color: "black" }}>Zerodha</p>
                <p
                  className="infopara"
                  style={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "white",
                    fontWeight: "400",
                    width: "40%",
                  }}
                >
                  Clone website for the stock trading dashboard names zerodha.
                  It includes all the essential pages and features that were
                  present on the parent platform<br></br> GitRepo:
                  <a
                    href="https://github.com/yashika0432/Stock-trading-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    https://github.com/yashika0432/Stock-trading-dashboard
                  </a>
                </p>
              </div>
              <div className="webcard webthree">
                <p style={{ color: "white" }}>003.</p>
                <p style={{ color: "black" }}>VideoCall</p>
                <p
                  className="infopara"
                  style={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "white",
                    fontWeight: "400",
                    width: "40%",
                  }}
                >
                  Video Conferencing website that allows you to join the call
                  after logging in and also as a guest using a meeting code
                  which is unique for every meet. <br></br> GitRepo:
                  <a
                    href="https://github.com/yashika0432/VIDEO-CONFERENCING"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    https://github.com/yashika0432/VIDEO-CONFERENCING
                  </a>
                </p>
              </div>
              <div className="webcard webfour">
                <p style={{ color: "white" }}>004.</p>
                <p style={{ color: "black" }}>TaskLog</p>
                <p
                  className="infopara"
                  style={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "white",
                    fontWeight: "400",
                    width: "40%",
                  }}
                >
                  To keep the track of the the tasks, with features like:
                  resetting the list,adding and removing some tasks and so on.{" "}
                  <br></br> GitRepo:
                  <a
                    href="https://github.com/yashika0432/ToDoList-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    https://github.com/yashika0432/ToDoList-react
                  </a>
                </p>
              </div>
              <div className="webcard webfive">
                <p style={{ color: "white" }}>005.</p>
                <p style={{ color: "black" }}>Simon Game</p>
                <p
                  className="infopara"
                  style={{
                    fontSize: "16px",
                    fontFamily: "poppins",
                    color: "white",
                    fontWeight: "400",
                    width: "40%",
                  }}
                >
                  Simon game- that tests your memory by asking you to repeat a
                  sequence of colors. Shows you your current level with each
                  progression and keeps the track of your highest score.
                  <br></br> GitRepo:
                  <a
                    href="https://github.com/yashika0432/SIMON"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    https://github.com/yashika0432/SIMON
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
