import React from "react";
import { Link } from "react-router-dom";
import { link } from "../assets/socialMediaLinks";

const SideBarFooter = () => {
  return (
    <div className="footer-sideBar">
      <span>Follow Me</span>
      <hr className="w-25 my-2" />
      {/* icons */}
      <div className="d-flex gap-2">
        {link.map((item, index) => {
          return (
            <Link to={item.link} key={index} className="text-decoration-none">
              {item.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SideBarFooter;
