import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";

const artifactColors = ["#121417", "#0f766e", "#d6a600", "#149eca", "#e85d75"];

const FloatingArtifacts = () => {
  const groupRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.4) * 0.26;
      groupRef.current.rotation.x = Math.sin(time * 0.32) * 0.12;
      groupRef.current.position.y = Math.sin(time * 0.7) * 0.08;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.8}>
      <group ref={groupRef}>
        {[0, 1, 2, 3, 4].map((item) => (
          <mesh
            key={item}
            position={[(item - 2) * 0.42, Math.sin(item) * 0.22, item * -0.06]}
            rotation={[0.35, item * 0.28, -0.14]}
          >
            <boxGeometry args={[0.36, 1.65 - item * 0.13, 0.08]} />
            <meshStandardMaterial
              color={artifactColors[item]}
              emissive={artifactColors[item]}
              emissiveIntensity={0.08}
              metalness={0.25}
              roughness={0.25}
              transparent
              opacity={item === 0 ? 0.9 : 0.72}
            />
          </mesh>
        ))}

        <mesh position={[0.1, -0.95, 0.1]} rotation={[0.1, -0.24, 0]}>
          <boxGeometry args={[2.5, 0.08, 0.72]} />
          <meshStandardMaterial color="#121417" metalness={0.2} roughness={0.34} />
        </mesh>
      </group>
    </Float>
  );
};

const HeroPage = () => {
  const heroRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out", duration: 1 } })
      .fromTo(heroRef.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0 })
      .fromTo(visualRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, "-=0.55");
  }, []);

  return (
    <section className="az-hero">
      <div className="az-hero-copy" ref={heroRef}>
        <p className="az-hi">hi.</p>
        <h1>
          i&apos;m
          <br />
          ram.
        </h1>
        <p className="az-intro">
          I build full-stack web apps with React, Node, Express, and MongoDB.
          My focus is practical product flows, clean interfaces, and backend
          systems that make the experience feel effortless.
        </p>
        <div className="az-inline-links">
          <Link to="/projects">work</Link>
          <Link to="/blog">write</Link>
          <Link to="/contact">say hi</Link>
        </div>
      </div>

      <div className="az-hero-art" ref={visualRef} aria-hidden="true">
        <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.6]} gl={{ alpha: true }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[3, 4, 5]} intensity={1.8} />
          <pointLight position={[-3, 2, 3]} intensity={1.6} color="#ffb703" />
          <Sparkles count={45} scale={[3.4, 3.4, 2]} size={1.5} speed={0.3} />
          <FloatingArtifacts />
        </Canvas>
      </div>
    </section>
  );
};

export default HeroPage;
