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
    <div className="app-container">
      <ParticlesBackground />
      <div className="app-content">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
