import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Authpage/AuthPage.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage/MainPage";
import AuthPage from "./Components/Authpage/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} index>
          <div className="App">
            <AuthPage />
          </div>
        </Route>
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
