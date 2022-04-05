import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Buffer } from 'buffer';
global.Buffer = Buffer;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
