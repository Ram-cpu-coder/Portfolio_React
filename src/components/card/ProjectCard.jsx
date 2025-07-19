import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out",
        }
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="container mb-5"
      style={{
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div
        className={`row align-items-center flex-column flex-md-row ${
          isEven ? "" : "flex-md-row-reverse"
        }`}
      >
        {/* Text Section */}
        <div className="col-md-6 p-4">
          <h2 className="fw-bold mb-3">{item.title}</h2>
          <p
            className="mb-3"
            style={{
              background: "#0d6efd",
              color: "#fff",
              borderRadius: "6px",
              padding: "0.75rem 1rem",
            }}
          >
            {item.description}
          </p>

          {item.role && (
            <p className="mb-2">
              <strong>My Role:</strong> {item.role}
            </p>
          )}

          <p className="mb-3 text-muted gap-1 d-flex">
            {/* <strong>Tech Stack:</strong>{" "} */}
            {item.tech.map((tech, i) => (
              <span key={i} className="badge bg-dark p-2">
                {tech}
                {/* {i < item.tech.length - 1 ? " | " : ""} */}
              </span>
            ))}
          </p>

          <div
            className={`d-flex flex-column align-items-${
              isEven ? "start" : "end"
            }`}
          >
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary mb-3"
                style={{ width: "fit-content" }}
              >
                🔗 Live Demo
              </a>
            )}

            <p className="mb-1 fw-semibold">Repository Links:</p>
            <div
              className={`d-flex flex-wrap gap-2 justify-content-${
                isEven ? "start" : "end"
              }`}
            >
              {item.githubFE && (
                <a
                  href={item.githubFE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                >
                  🖥️ Frontend
                </a>
              )}
              {item.githubBE && (
                <a
                  href={item.githubBE}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary btn-sm"
                >
                  🛠️ Backend
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img
            src={item.img}
            alt={item.title}
            className="img-fluid"
            style={{
              borderRadius: "0",
              width: "100%",
              maxHeight: "350px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
