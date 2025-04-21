import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AnimatedBackground } from "animated-backgrounds";
import gsap from "gsap";

// Root-level mouse tracking logic
function GlobalCursor() {
  useEffect(() => {
    const pointer = document.querySelector("#cursor");

    // Variables to store the mouse coordinates
    let mouseX = 0;
    let mouseY = 0;

    // This function will run continuously to update the cursor position
    const updateCursor = () => {
      gsap.to(pointer, {
        x: mouseX, // Adjust the cursor position based on the mouse X
        y: mouseY, // Adjust the cursor position based on the mouse Y
        duration: 0.1, // Short duration to make it responsive
        // ease: "power2.out",
      });

      // Request the next animation frame
      requestAnimationFrame(updateCursor);
    };

    // Handle mousemove event and update coordinates
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    // Start the cursor update loop
    requestAnimationFrame(updateCursor);

    // Add event listener for mousemove
    document.body.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      id="cursor"
      style={{
        zIndex: 99999,
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        background: "black",
        position: "fixed",
        pointerEvents: "none", // Ensures the cursor does not interfere with other elements
      }}
    ></div>
  );
}

// Rendering the entire app with the custom cursor component
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalCursor />
    <App />
  </React.StrictMode>
);
