import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const PathTrackerContext = createContext();
export const PathTrackerProvider = ({ children }) => {
  const location = useLocation();
  const [previousPath, setPreviousPath] = useState(null);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname);
    setPreviousPath(currentPath);
  }, [location]);
  return (
    <PathTrackerContext.Provider value={{ currentPath, previousPath }}>
      {children}
    </PathTrackerContext.Provider>
  );
};
