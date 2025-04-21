import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import SideBar from "../components/SideBar";

const Layout = () => {
  const [navMenu, setNavMenu] = useState(false);
  return (
    <div className="">
      {navMenu ? (
        <Menu setNavMenu={setNavMenu} navMenu={navMenu} />
      ) : (
        <div className="d-flex flex-column" style={{ height: "100vh" }}>
          <Navbar setNavMenu={setNavMenu} navMenu={navMenu} />

          <div
            style={{ minHeight: "80vh" }}
            className="d-flex justify-content-center position-relative"
          >
            {/* side bar */}
            <SideBar />
            {/* main content */}
            <main className="" style={{ width: "75vw" }}>
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
