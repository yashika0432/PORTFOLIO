import "./App.css";
import Navbar from "./components/navbar";
import Contact from "./pages/contact";
import Landing from "./pages/landing";
import Me from "./pages/me";
import Work from "./pages/work";

function App() {
  return (
    <>
      <div className="tabbar">
        <img src="/tab icon.png" alt="tab icon" />
      </div>
      <Navbar />
      <Landing />
      <Me />
      <Work />
      <Contact />
    </>
  );
}

export default App;
