import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import gsap from "gsap";

// Root-level mouse tracking logic
function GlobalCursor() {
  useEffect(() => {
    const pointer = document.querySelector("#cursor");
    const pointer1 = document.querySelector("#cursor1");
    // Variables to store the mouse coordinates
    let mouseX = 0;
    let mouseY = 0;

    // running the function continuously to update the cursor position
    const updateCursor = () => {
      gsap.to(pointer, {
        x: mouseX,
        y: mouseY,
        duration: 0,
        ease: "power2.out",
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
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        background: "black",
        position: "fixed",
        pointerEvents: "none",
      }}
    ></div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // this is the cursor following the actual pointer globally */}
    <GlobalCursor />
    <App />
  </React.StrictMode>
);
