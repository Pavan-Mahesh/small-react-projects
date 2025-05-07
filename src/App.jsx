import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/LandingPage.jsx";
import Tenzies from "./pages/tenzies/Tenzies.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tenzies" element={<Tenzies />} />
      </Routes>
    </>
  );
}
