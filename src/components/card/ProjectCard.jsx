import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectCard = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.75, delay: index * 0.1, ease: "power3.out" }
    );
  }, [index]);

  return (
    <article className="az-work-item" ref={cardRef}>
      <a href={item.live || item.githubFE} target="_blank" rel="noreferrer" className="az-work-thumb">
        <img src={item.img} alt={item.title} />
      </a>

      <div className="az-work-copy">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <div className="az-tags">
          {item.tech.map((tech) => (
            <small key={tech}>{tech}</small>
          ))}
        </div>
        <div className="az-text-links">
          {item.live && <a href={item.live} target="_blank" rel="noreferrer">live</a>}
          {item.githubFE && <a href={item.githubFE} target="_blank" rel="noreferrer">frontend</a>}
          {item.githubBE && <a href={item.githubBE} target="_blank" rel="noreferrer">backend</a>}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
