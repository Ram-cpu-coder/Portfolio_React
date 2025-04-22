import React from "react";
import { Link } from "react-router-dom";
import { link } from "../assets/socialMediaLinks";

const SideBar = () => {
  return (
    <div className="vertical-sideBar">
      <span>Follow Me</span>
      <hr className="w-25" />
      {/* icons */}
      <div className="d-flex gap-2">
        {link.map((item, index) => {
          return (
            <Link
              to={item.link}
              key={index}
              className="rotate-icons text-decoration-none"
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
