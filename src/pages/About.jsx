import React from "react";

const About = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="aboutBackground position-relative">
        <h1
          className="position-absolute text-black"
          style={{ top: "30%", left: "10%" }}
        >
          About Me
        </h1>
      </div>
      <p>
        Hi, I’m Ram — a MERN stack developer who loves building full-stack web
        apps that are fast, functional, and user-friendly.
      </p>
      <p>
        I specialize in MongoDB, Express.js, React.js, and Node.js, with a
        strong focus on clean code, scalable APIs, and smooth user experiences.
        From authentication systems to responsive UIs, I enjoy turning complex
        problems into elegant solutions.
      </p>
    </div>
  );
};

export default About;
