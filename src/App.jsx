import { Routes, Route } from "react-router";

import Tenzies from "./tenzies/Tenzies.jsx";
import LandingPage from "./landing-page/LandingPage.jsx";

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
