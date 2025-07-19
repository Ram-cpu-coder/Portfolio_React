import React from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import Language from "./Language";
import { useTranslation } from "react-i18next";

const Navbar = ({ navMenu, setNavMenu }) => {
  const { t } = useTranslation("navbar");

  return (
    <nav className="w-100 glassmophorism" style={{ height: "80px" }}>
      <div
        className="navbar-width d-flex justify-content-between align-items-center mx-auto px-3"
        style={{ height: "100%" }}
      >
        {/* Logo + Language */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="text-decoration-none fs-2 fw-bold text-dark">
            {t("logo")}
          </Link>
          <div className="vr mx-2" />
          <Language />
        </div>

        {/* Menu Button */}
        <button
          className="border-0 bg-transparent fs-3 d-flex align-items-center"
          onClick={() => setNavMenu(!navMenu)}
          aria-label="Toggle navigation menu"
        >
          {navMenu ? <IoMdClose /> : <RxHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
