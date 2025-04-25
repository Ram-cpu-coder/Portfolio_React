import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import StarField from "./components/StarField";
import { useDispatch } from "react-redux";
import { contributionFromDbAction } from "./feature/githubContributionAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contributionFromDbAction());
    console.log("ran");
  }, []);
  return (
    <div className="position-relative vh-100 d-flex justify-content-center">
      <div className="position-absolute backgroundA">
        {/* this is the background */}
        {/* <StarField /> */}
      </div>
      <div className="position-absolute">
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
