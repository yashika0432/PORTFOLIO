import "../style/work.css";

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
            <img src="/posterwork.png" alt="" className="Poster work"></img>
            <img src="/drop.png" alt="" className="drop el"></img>
            <img src="/webwork.png" alt="" className="Web work"></img>
            <img src="/curve.png" alt="" className="curarr el"></img>
            <img src="/STARS.png" alt="" className="star el"></img>
            <img src="/appwork.png" alt="" className="App work"></img>
            <img src="/arrowDown.png" alt="" className="arrdown el"></img>
            <img src="/zigzag.png" alt="" className="zig el"></img>
            <img src="/lines.png" alt="" className="lines el"></img>
          </div>
          <div className="webdev">
            <h2>Web Dev</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Work;
