import React from "react";
import { projectsList } from "../assets/projects";
import ProjectCard from "../components/card/ProjectCard";

const Project = () => {
  return (
    <div className="w-100 ">
      <h1 className="row pb-3">Projects</h1>
      <div className="d-flex flex-column gap-4">
        {projectsList.map((item, index) => {
          return <ProjectCard item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Project;
