import React from "react";
import { projectsList } from "../assets/projects";
import ProjectCard from "../components/card/ProjectCard";

const Project = () => {
  return (
    <main className="az-page">
      <header className="az-section-head">
        <h1>work</h1>
        <p>
          A few full-stack projects where I shaped the interface, backend flow,
          and the product details that make each app usable.
        </p>
      </header>

      <section className="az-work-list">
        {projectsList.map((item, index) => (
          <ProjectCard key={item.title} item={item} index={index} />
        ))}
      </section>
    </main>
  );
};

export default Project;
