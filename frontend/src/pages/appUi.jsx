import "../style/appui.css";
import BounceCards from "../component/BounceCards";
import drone1 from "../assets/drone1.png";
import drone2 from "../assets/drone2.png";
import drone3 from "../assets/drone3.png";
import drone4 from "../assets/drone4.png";
import drone5 from "../assets/drone5.png";
import veda1 from "../assets/veda1.png";
import veda2 from "../assets/veda2.png";
import veda3 from "../assets/veda3.png";
import veda4 from "../assets/veda4.png";
import veda5 from "../assets/veda5.png";

const droneapp = [drone1, drone2, drone3, drone4, drone5];
const vedapp = [veda1, veda2, veda3, veda4, veda5];

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
];

function AppDev() {
  return (
    <div className="appworkspace">
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
            hardware to get the desired information without any hassle.
            <br></br> It provides feature like controlling your device, tracking
            it, scheduling next flight etc.
          </p>
          <div className="appimage">
            <BounceCards
              className="custom-bounceCards"
              images={droneapp}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover
            />
          </div>
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
          <div className="appimage">
            <BounceCards
              className="custom-bounceCards"
              images={vedapp}
              containerWidth={500}
              containerHeight={250}
              animationDelay={1}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDev;
