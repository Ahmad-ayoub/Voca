import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Authpage/AuthPage.css";
import AuthPage from "./Components/Authpage/AuthPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
