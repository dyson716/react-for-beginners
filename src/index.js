import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Styles from "./styles.css";

/* 노마드코더 강의 Source

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  document.getElementById("root")
);

*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
