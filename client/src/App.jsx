import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Upload from "./pages/Upload";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
