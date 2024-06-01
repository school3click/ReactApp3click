import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import JSX from "./JSX";
import Welcome from "./Welcome";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes , Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/Home/:username" element={<Home/>}/>
      <Route path="/About">
        <Route path="/About/JSX" element={<JSX/>}/>
        <Route path="/About/Welcome" element={<Welcome/>}/>
      </Route>
      <Route path="/*" element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
