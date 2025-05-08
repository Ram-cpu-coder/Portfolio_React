import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = ({ setNavMenu, navMenu }) => {
  const { t } = useTranslation("navbar");
  const handleOnClose = () => {
    setNavMenu(false);
  };
  const links = [
    { name: t("Home"), link: "/" },
    { name: t("Works"), link: "/projects" },
    { name: t("Blogs"), link: "/blog" },
    { name: t("About Me"), link: "/about" },
    { name: t("Contact Me"), link: "/contact" },
  ];
  const closeButtonRef = useRef(null);
  useEffect(() => {
    if (closeButtonRef.current) {
      gsap.fromTo(
        closeButtonRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          delay: 0.5,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);
  return (
    <div
      className="menu-animation d-flex justify-content-center align-items-center position-relative"
      style={{ height: "100vh", width: "100vw" }}
    >
      <button
        className="position-absolute fs-1 border-0 bg-transparent"
        style={{ top: "20%", right: "20%" }}
        onClick={handleOnClose}
        ref={closeButtonRef}
      >
        <IoMdClose className="text-black" />
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
  );
};

export default Menu;
