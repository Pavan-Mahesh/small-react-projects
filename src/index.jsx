import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";

import App from "./App.jsx";
import "./index.css";

const basename =
  process.env.NODE_ENV === "production" ? "/small-react-projects" : "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter basename={basename}>
    <App />
  </HashRouter>
);
