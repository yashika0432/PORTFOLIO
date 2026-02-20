import "../style/appui.css";

function AppDev() {
  return (
    <div>
      <div className="tabappui">
        <p>App UI/UX</p>
        <img src="/tab icon.png" alt="tab icon" />
      </div>
      <h1 className="mainhead">My Projects</h1>
      <div className="allAppui">
        <div className="firstApp">
          <h1>001.</h1>
          <h2>Drone Sewa</h2>
          <p>
            App objectives are to control the drone and make the software easy
            to handle. Making it efficient for the user to work and for the
            hardware to get the desired information without any hassle.<br></br>{" "}
            It provides feature like controlling your device, tracking it,
            scheduling next flight etc.
          </p>
          <img src="/mobileApp1.png" alt=""></img>
        </div>
        <div className="secondApp">
          <h1>002.</h1>
          <h2>Vedapath</h2>
          <p>
            Mythological gateway straight from your screen. All tales direct
            from original scriptures and vedas. Available in more than one
            language for the efficiency of the user, with a UI that makes it
            easy to navigate.<br></br> Additionally, motivational and calming
            stories depending on user’s mood after asking them.
          </p>
          <img src="/mobileApp2.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default AppDev;
