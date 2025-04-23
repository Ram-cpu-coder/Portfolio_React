import React from "react";

const ProjectCard = ({ item, index }) => {
  const even = index % 2;
  return (
    <div className="w-100 container">
      <div
        className={`d-flex justify-content-center align-items-center projectCard row border p-2 rounded ${
          even ? "flex-sm-row-reverse flex-column" : "flex-sm-row flex-column"
        }`}
      >
        <div
          className="col-sm-6 col-12 p-2"
          style={{
            textAlign: even ? "right" : "left",
          }}
        >
          <h2 className="text-dark">{item.title}</h2>
          <div className="bg-primary text-white rounded px-3 py-2">
            {item.description}
          </div>
          <p className="mb-0 pt-2">
            {item.tech.map((techItem, i) => (
              <span key={i}>{techItem} | </span>
            ))}
          </p>
          <div className="d-flex flex-column pt-2">
            <a href={item.live} className="text-decoration-none text-black">
              🔗 Live
            </a>
            <div className="pt-1">
              <p className="mb-1">Repo:</p>
              <div
                className={`d-flex gap-3 flex-wrap`}
                style={{ justifyContent: even ? "end" : "start" }}
              >
                <a
                  href={item.githubFE}
                  className="text-decoration-none text-black"
                >
                  🖥️ FrontEnd
                </a>
                <a
                  href={item.githubBE}
                  className="text-decoration-none text-black"
                >
                  🛠️ BackEnd
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src={item.img}
          alt=""
          className="rounded col-sm-6 col-12 p-2"
          style={{
            height: "300px",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
