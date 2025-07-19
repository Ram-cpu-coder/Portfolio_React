import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = ({ setNavMenu }) => {
  const { t } = useTranslation("navbar");
  const closeButtonRef = useRef(null);
  const linksContainerRef = useRef(null);

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

  useEffect(() => {
    // Animate close button
    gsap.fromTo(
      closeButtonRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    // Animate links container
    gsap.fromTo(
      linksContainerRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      className="menu-animation d-flex justify-content-center align-items-center position-fixed top-0 start-0 bg-black"
      style={{ height: "100vh", width: "100vw", zIndex: 9999, color: "white" }}
    >
      <button
        className="position-absolute fs-1 border-0 bg-transparent"
        style={{ top: "2rem", right: "2rem" }}
        onClick={handleOnClose}
        ref={closeButtonRef}
      >
        <IoMdClose className="text-white" />
      </button>

      <div
        className="d-flex flex-column justify-content-center align-items-center fs-1 gap-4"
        ref={linksContainerRef}
      >
        {links.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="text-decoration-none text-white"
            onClick={handleOnClose}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
