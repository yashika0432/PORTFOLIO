import "../style/posters.css";

function PosterWork() {
  return (
    <div className="work1">
      <div className="tabposters">
        <p>Posters/Social Media</p>
        <img src="/tab icon.png" alt="tab icon" />
      </div>
      <div className="workspacePoster">
        <img src="/dialog.png" className="parts iconDialog" alt="" />
        <img src="/hovertext.png" className="parts hoverhere" alt="" />
        <img src="/box.png" className="parts boxes" alt="" />
        <img src="/pen.png" className="parts pen" alt="" />
        <img
          src="/functionsRight.png"
          className="parts workRightBlock"
          alt=""
        />
        <div className="mainpart"></div>
      </div>
    </div>
  );
}

export default PosterWork;
