import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const SideBar = () => {
  const link = [
    {
      link: "https://www.linkedin.com/in/ramkumardhimal/",
      icon: <FaLinkedin />,
    },
    {
      link: "https://www.instagram.com/ram3510kumar/",
      icon: <FaInstagramSquare />,
    },
    { link: "https://github.com/Ram-cpu-coder", icon: <FaGithubSquare /> },
    {
      link: "https://www.facebook.com/jiten.magar.5680/",
      icon: <FaFacebookSquare />,
    },
  ];
  return (
    <div
      className="d-flex align-items-center gap-2 vertical-sideBar position-fixed top-50"
      style={{ width: "250px", height: "50px", left: "-90px" }}
    >
      <span>Follow Me</span>
      <hr className="w-25" />
      {/* icons */}
      <div className="d-flex gap-2">
        {link.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="rotate-icons text-decoration-none text-black"
            >
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
