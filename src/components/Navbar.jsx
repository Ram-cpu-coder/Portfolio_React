import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Language from "./Language";
import { useTranslation } from "react-i18next";

const Navbar = ({ navMenu, setNavMenu }) => {
  const { t } = useTranslation("navbar");
  return (
    <div
      className="d-flex justify-content-center glassmophorism position-sticky"
      style={{ top: 0, width: "100vw", zIndex: "2" }}
    >
      <div
        className="d-flex justify-content-between align-items-center navbar-width pb-1"
        style={{ height: "100px" }}
      >
        <div className="d-flex align-items-center">
          <Link to="/" className="text-decoration-none text-black fs-1 ">
            {t("logo")}
          </Link>
          <hr className="vertical-hr m-auto" />
          {/* <span className="text-decoration-none text-black fs-3">Language</span> */}
          <Language />
        </div>
        <button
          className="border-0 text-black fs-4 bg-transparent"
          onClick={() => setNavMenu(!navMenu)}
        >
          {navMenu ? <IoMdClose /> : <RxHamburgerMenu className="text-black" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
