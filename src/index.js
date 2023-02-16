import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./homeStyle.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ResumeApp from "./components/resumeApp";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Main from "./components/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
