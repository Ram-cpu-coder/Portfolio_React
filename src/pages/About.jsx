import React, { useEffect } from "react";
import GithubContributionGraph from "../components/GithubContributionGraph";
import { useSelector } from "react-redux";

const About = () => {
  const { contributions } = useSelector(
    (state) => state.githubContributionInfo
  );
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="row mb-4 p-2">
        <h1 className="text-black">About Me</h1>

        <p className="">
          Hi, I’m Ram — a MERN stack developer who loves building full-stack web
          apps that are fast, functional, and user-friendly.
        </p>
        <p className="mb-0">
          I specialize in MongoDB, Express.js, React.js, and Node.js, with a
          strong focus on clean code, scalable APIs, and smooth user
          experiences. From authentication systems to responsive UIs, I enjoy
          turning complex problems into elegant solutions.
        </p>
      </div>

      <div className="bg-white rounded shadow-sm mb-5 w-100 row p-2">
        <h2 className="h4 fw-bold mb-3 row">My GitHub Contributions</h2>
        <GithubContributionGraph />

        <h2 className="h4 fw-bold mt-3 row">At the moment</h2>
        <p className="text-secondary p-0">
          I’m currently developing a <strong>Library Management System</strong>{" "}
          using <strong>React.js</strong>,<strong>Node.js</strong>,{" "}
          <strong>Express.js</strong>, and <strong>MongoDB</strong>. It allows
          admins and students to manage book records, registration, and login
          with <strong>JWT authentication</strong>, secure password hashing via{" "}
          <strong>Bcrypt</strong>, and <strong>email verification</strong> using
          Nodemailer and Maulter.
        </p>
        <p className="mt-3">
          <a
            href="https://github.com/ramdc20/Library_Management_System"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            View Source on GitHub
          </a>
          <br />
          <a
            href="https://library-management-system-dc.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="link-primary"
          >
            Live Demo
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
