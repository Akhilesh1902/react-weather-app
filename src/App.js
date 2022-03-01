import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppPage from "./components/AppPage";
import LandingPage from "./components/landingpage/LandingPage";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
