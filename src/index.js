import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Since Firebase is initialized in the firebase-config file,
// you don't need to initialize it here again.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
