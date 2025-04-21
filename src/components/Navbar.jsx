import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Language from "./Language";

const Navbar = ({ navMenu, setNavMenu }) => {
  if (navMenu) {
    return (
      <div className="position-absolute z-3">
        <Menu navMenu={navMenu} setNavMenu={setNavMenu} />
      </div>
    );
  }

  return (
    <div
      className="d-flex justify-content-center glassmophorism position-sticky z-3"
      style={{ top: 0 }}
    >
      <div
        className="d-flex justify-content-between align-items-center navbar-width pb-1"
        style={{ height: "100px" }}
      >
        <div className="d-flex align-items-center">
          <Link to="/" className="text-decoration-none text-black fs-1 ">
            Ram
          </Link>
          <hr className="vertical-hr m-auto" />
          {/* <span className="text-decoration-none text-black fs-3">Language</span> */}
          <Language />
        </div>
        <button
          className="border-0 text-black fs-4 bg-transparent"
          onClick={() => setNavMenu(!navMenu)}
        >
          {navMenu ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
