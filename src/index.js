import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Context from './Context/Context'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   <Context>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
