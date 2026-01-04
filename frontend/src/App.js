import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import PosterWork from "./pages/posters";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/posters" element={<PosterWork />} />
      </Routes>
    </div>
  );
}

export default App;
