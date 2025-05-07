import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";

import App from "./App.jsx";
import "./index.css";

const basename =
  import.meta.env.MODE === "production" ? "/small-react-projects" : "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter basename={basename}>
    <App />
  </HashRouter>
);
