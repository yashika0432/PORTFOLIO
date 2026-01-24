import "../style/webdev.css";

function Webdevelopment() {
  return (
    <div>
      <div className="tabwebdev">
        <p>Website UI/UX</p>
        <img src="/tab icon.png" alt="tab icon" />
      </div>
      <h1 className="mainhead">My Projects</h1>
      <div className="allprojects">
        <div className="aaryaDes">
          <div className="projectSerial">001.</div>
          <div className="projectdetail aaryavartPj">
            <img src="/aaryaPic.png" alt=""></img>
            <p>
              Aaryavart is a foundation for children with special needs and
              having autism. This foundation provide different service for the
              same. This website is to facilitate the the process of accessing
              the same services and contains the color palette that do not
              disturb the one having autism.<br></br> For better visuals click
              the folder.
            </p>
            <div className="folderimg"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Webdevelopment;
