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
        x: mouseX - 15 + "px",
        y: mouseY - 15 + "px",
        duration: 0,
        delay: 0.4,
        // ease: "power2.out",
      });
      gsap.to(pointer1, {
        x: mouseX - 2.5 + "px",
        y: mouseY - 2.5 + "px",
        duration: 0,
        delay: 0.1,
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
    <>
      <div
        id="cursor"
        style={{
          zIndex: 99999,
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          border: "1px solid black",
          background: "transparent",
          position: "fixed",
          pointerEvents: "none",
          boxShadow: "1px 15px 40px -8px rgba(0,0,0,1)",
        }}
      ></div>
      <span
        id="cursor1"
        style={{
          height: "5px",
          width: "5px",
          zIndex: 999991,
          borderRadius: "50%",
          border: "1px solid black",
          background: "black",
          position: "fixed",
          pointerEvents: "none",
        }}
      ></span>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // this is the cursor following the actual pointer globally */}
    <GlobalCursor />
    <App />
  </React.StrictMode>
);
