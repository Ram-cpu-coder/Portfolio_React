import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedText } from "animated-backgrounds";
import gsap from "gsap";

const HeroPage = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);

  useEffect(() => {
    const animateElement = (ref, options) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, ...options.from },
        { opacity: 1, duration: 2, ease: "power3.out", ...options.to }
      );
    };

    animateElement(nameRef, { to: { delay: 0.2 } });
    animateElement(roleRef, { to: { delay: 0.6 } });
    animateElement(descRef, { to: { delay: 1 } });

    gsap.fromTo(
      btnRef1.current,
      { opacity: 0, x: -100 },
      { x: 0, opacity: 1, duration: 2, delay: 1.4, ease: "power3.out" }
    );
    gsap.fromTo(
      btnRef2.current,
      { opacity: 0, x: 100 },
      { x: 0, opacity: 1, duration: 2, delay: 1.4, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative"
      style={{ minHeight: "60vh" }}
    >
      <div>
        <h1 ref={nameRef} className="text-center">
          I'm Ram Kumar Dhimal
        </h1>
        <h1 ref={roleRef} className="text-center">
          A Software Developer
          {/* <AnimatedText
            text=" A Software Developer"
            effect="typewriter"
            config={{
              speed: 100,
              loop: true,
              delay: 1000,
            }}
          /> */}
        </h1>
        <p className="py-2 text-center" ref={descRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          delectus!
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <button className="bg-black" ref={btnRef1}>
            <Link to="/projects" className="text-decoration-none text-white">
              My Work
            </Link>
          </button>
          <button className="bg-white" ref={btnRef2}>
            <Link to="/resume" className="text-decoration-none text-black">
              Resume
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
