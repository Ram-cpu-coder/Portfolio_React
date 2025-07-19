import React from "react";
import { projectsList } from "../assets/projects";
import ProjectCard from "../components/card/ProjectCard";
import Layout from "../layout/Layout";

const Project = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-12 text-center">
          <h1 className="fw-bold">My Projects</h1>
          <p className="text-muted">
            A showcase of what I've built — design, code, and ideas.
          </p>
        </div>
      </div>

      <div className="">
        {projectsList.map((item, index) => (
          <ProjectCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
