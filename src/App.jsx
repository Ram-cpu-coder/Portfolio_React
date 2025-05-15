import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { contributionFromDbAction } from "./feature/githubContributionAction";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contributionFromDbAction());
    localStorage.setItem("i18nextLng", "en");
  }, []);
  return (
    // <div className="position-relative vh-100 d-flex justify-content-center">
    <div className="app-container">
      <ParticlesBackground />
      <div className="app-content">
        <AppRoutes />
      </div>
    </div>
    // </div>
  );
}

export default App;
