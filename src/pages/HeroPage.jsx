import React from "react";
import { Link } from "react-router-dom";
import { AnimatedText } from "animated-backgrounds";

const HeroPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative"
      style={{ minHeight: "60vh" }}
    >
      <div className="position-absolute"></div>
      {/* left hero */}
      <div className="">
        <h1>I'm Ram Kumar Dhimal</h1>
        <h1>
          <span>A Software Developer</span>
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
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          delectus!
        </p>
        <div className="d-flex gap-2">
          <button className="bg-black">
            <Link to="/projects" className="text-decoration-none text-white">
              My Work
            </Link>
          </button>
          <button className="bg-white">
            <Link to="/resume" className="text-decoration-none text-black">
              Resume
            </Link>
          </button>
        </div>
      </div>
      {/* right hero */}
      {/* <div></div> */}
    </div>
  );
};

export default HeroPage;
