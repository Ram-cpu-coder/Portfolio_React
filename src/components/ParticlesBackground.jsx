import React, { useMemo, useState, useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = (props) => {
  const [particleCount, setParticleCount] = useState(50);

  const initParticles = async (engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = (container) => {
    console.log("Particles loaded:", container);
  };

  useEffect(() => {
    const handlePageClick = () => {
      setParticleCount((prev) => prev + 5);
    };

    window.addEventListener("click", handlePageClick);
    return () => {
      window.removeEventListener("click", handlePageClick);
    };
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: "black",
        },
        shadow: {
          enable: true,
          color: "rgba(0,0,0,0.2)",
          blur: 3,
        },
        links: {
          color: "black",
          distance: 150,
          enable: true,
          opacity: 0.6,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: particleCount,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [particleCount]
  );

  return (
    <Particles
      id={props.id}
      init={initParticles}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesBackground;
