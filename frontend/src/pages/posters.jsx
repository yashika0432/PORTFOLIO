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
        <div className="splitWrapper" alt="">
          <img src="/headUp.png" className="photo1 imgsplit" alt=""></img>

          {/* <div className="posts">
            <img src="/f1.png" alt=""></img>
            <img src="/thumbnail.png" alt=""></img>
            <img src="/thumbnail2.png" alt=""></img>
            <img src="/f1cards.png" alt=""></img>
            <img src="/f1Poster.png" alt=""></img>
            <img src="/thumbnail3.png" alt=""></img>
            <img src="/ad.png" alt=""></img>
            <img src="/ad2.png" alt=""></img>
          </div> */}

          <img src="/headDown.png" className="photo2 imgsplit" alt=""></img>
        </div>
        <img src="/hovertext.png" className="parts hoverhere" alt="" />
        <img src="/box.png" className="parts boxes" alt="" />
        <img src="/pen.png" className="parts pen" alt="" />
        <div className="properties-panel">
          <img src="/functionsRight.png" alt="" />
        </div>

        <div className="mainpart"></div>
      </div>
    </div>
  );
}

export default PosterWork;
