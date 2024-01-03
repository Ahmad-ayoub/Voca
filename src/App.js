import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/AuthPage/AuthPage.css";
import "./Components/MainPage/MainPage.css";
import "./Components/SettingsPage/SettingsPage.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import AuthPage from "./Components/AuthPage/AuthPage";
import SettingsPage from "./Components/SettingsPage/SettingsPage";
import { useTheme } from "./Components/ThemeChange/UseTheme";

function App() {
  return (
    <Router>
      <useTheme>
        <Routes>
          <Route path="/" element={<AuthPage />} index />
          <Route path="/MainPage" element={<MainPage />} />
          <Route path="/SettingsPage" element={<SettingsPage />} />
        </Routes>
      </useTheme>
    </Router>
  );
}

export default App;
