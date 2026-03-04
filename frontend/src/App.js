import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import PosterWork from "./pages/posters";
import Webdevelopment from "./pages/webdev";
import AppDev from "./pages/appUi";
import ScrollToTop from "./pages/scrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/posters" element={<PosterWork />} />
        <Route path="/webdev" element={<Webdevelopment />} />
        <Route path="/appdev" element={<AppDev />} />
      </Routes>
    </div>
  );
}

export default App;
