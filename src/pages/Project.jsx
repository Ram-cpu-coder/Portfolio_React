import React from "react";
import { projectsList } from "../assets/projects";
import ProjectCard from "../components/card/ProjectCard";

const Project = () => {
  return (
    <div className="w-100 ">
      <h1 className="row  mb-3 p-2">Projects</h1>
      <div className="row">
        {projectsList.map((item, index) => {
          return <ProjectCard item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Project;
