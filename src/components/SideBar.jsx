import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { link } from "../assets/socialMediaLinks";
import gsap from "gsap";

const SideBar = () => {
  const sideRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sideRef.current,
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <div className="vertical-sideBar" ref={sideRef}>
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
