import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const StarField = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars
        radius={100} // Size of the sphere
        depth={50} // How far stars go in Z direction
        count={5000} // Number of stars
        factor={4} // Size factor
        saturation={0} // No color saturation
        fade // Fades stars as they move away
        speed={1} // Rotation speed
      />
    </Canvas>
  );
};

export default StarField;
