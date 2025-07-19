import React from "react";
import {
  FaGithub,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";
import GithubContributionGraph from "../components/GithubContributionGraph";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="container my-5">
      {/* Header Section */}
      <header className="mb-5 text-center">
        <h1 className="display-4 fw-bold text-dark">About Me</h1>
        <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
          Hi, I’m Ram — a MERN stack developer who loves building fast,
          functional, and user-friendly full-stack web apps.
        </p>
      </header>

      {/* Intro Text */}
      <section className="mb-5">
        <p className="fs-5 text-secondary">
          I specialize in MongoDB, Express.js, React.js, and Node.js, focusing
          on clean code, scalable APIs, and smooth user experiences. I enjoy
          turning complex problems into elegant solutions.
        </p>
      </section>

      {/* Cards Section */}
      <section className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h3 className="card-title d-flex align-items-center gap-2">
                <FaBriefcase className="text-primary" /> Work Experience
              </h3>
              <WorkExperience />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h3 className="card-title d-flex align-items-center gap-2">
                <FaGraduationCap className="text-primary" /> Education
              </h3>
              <Education />
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body">
              <h3 className="card-title d-flex align-items-center gap-2">
                <FaTools className="text-primary" /> Skills
              </h3>
              <Skills />
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Contribution Section */}
      <section className="card shadow-sm border-0 p-4 mb-5">
        <h2 className="h4 fw-bold mb-3 d-flex align-items-center gap-2">
          <FaGithub className="text-dark" /> GitHub Commits
        </h2>
        <GithubContributionGraph />
      </section>

      {/* Current Work Section */}
      <section className="card shadow-sm border-0 p-4">
        <h2 className="h4 fw-bold mb-3">Currently Working On</h2>
        <p className="text-secondary fs-5">
          I’m developing a <strong>E-commerce Web App</strong> using{" "}
          <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
          <strong>Express.js</strong>, and <strong>MongoDB</strong>. The app
          features admin & customer order management, JWT authentication, secure
          password hashing with Bcrypt, email verification using Nodemailer, and
          image uploads with Multer.
        </p>

        <div className="mt-4">
          <h3 className="h5 fw-semibold mb-2">View Source on GitHub</h3>
          <div className="d-flex gap-3 flex-wrap">
            <a
              href="https://github.com/ishworj/e-commerce-fe"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Frontend
            </a>
            <a
              href="https://github.com/ishworj/e-commerce-be"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Backend
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
