import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage.jsx";
import Tenzies from "./pages/tenzies/Tenzies.jsx";
import AssemblyEndgame from "./pages/assembly-endgame/endgame.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tenzies" element={<Tenzies />} />
        <Route path="/endgame" element={<AssemblyEndgame />} />
      </Routes>
    </>
  );
}
