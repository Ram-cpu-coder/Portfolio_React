import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = ({ setNavMenu, navMenu }) => {
  const handleOnClose = () => {
    setNavMenu(false);
  };
  const links = [
    { name: "Home", link: "/" },
    { name: "Skills", link: "/skills" },
    { name: "Projects", link: "/projects" },
    { name: "Blogs", link: "/blogs" },
    { name: "About Me", link: "/about" },
    { name: "Contact Me", link: "/contact" },
  ];
  return (
    navMenu && (
      <div
        className="d-flex justify-content-center align-items-center menu-animation position-relative"
        style={{ height: "100vh", width: "100vw" }}
      >
        <button
          className="position-absolute fs-1 border-0 bg-transparent"
          style={{ top: "20%", right: "20%" }}
          onClick={handleOnClose}
        >
          <IoMdClose />
        </button>
        <div className="d-flex flex-column justify-content-center align-items-center fs-1 ">
          {links.map((item, index) => {
            return (
              <Link
                to={item.link}
                key={index}
                className="text-decoration-none text-black"
                onClick={() => setNavMenu(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Menu;
