import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Me from "./pages/me";

function App() {
  return (
    <>
      <div className="tabbar">
        <img src="/tab icon.png" alt="tab icon" />
      </div>
      <Navbar />
      <Landing />
      <Me />
    </>
  );
}

export default App;
