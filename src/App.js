import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/AuthPage/AuthPage.css";
import "./Components/MainPage/MainPage.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import AuthPage from "./Components/AuthPage/AuthPage";
import settingsPage from "./Components/SettingsPage/settingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} index />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/settingsPage" element={<settingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
