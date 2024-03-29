import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Soritngprovider } from "./context/Sortcontext";
import { Searchprovider } from "./context/Searchcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Searchprovider>
    <Soritngprovider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Soritngprovider>
  </Searchprovider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
