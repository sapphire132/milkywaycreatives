import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/app";
import "./index.css";
import "./styles/font.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
