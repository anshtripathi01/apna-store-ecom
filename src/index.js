import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Context from './Context/Context'
import AuthContext from "./Context/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <AuthContext>
   <Context>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Context>
  </AuthContext>
  </React.StrictMode>,
  document.getElementById("root")
);
