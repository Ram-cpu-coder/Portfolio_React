import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="border-bottom shadow d-flex border justify-content-center">
      <div
        className="d-flex align-items-center justify-content-between navbar-width"
        style={{ height: "60px" }}
      >
        <Link to="/">Ram</Link>
        <Link to="/">
          <RxHamburgerMenu />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
