import React from "react";

const skills = [
  "React",
  "Redux",
  "Node.js",
  "Express",
  "MongoDB",
  "Bootstrap",
  "Axios",
  "JWT",
  "REST APIs",
];

const Skills = () => {
  return (
    <div className="skill-cloud">
      {skills.map((skill) => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
};

export default Skills;
