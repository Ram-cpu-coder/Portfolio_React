import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SideBar from "../components/SideBar";

const Layout = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar setNavMenu={setNavMenu} navMenu={navMenu} />

      {navMenu && <Menu setNavMenu={setNavMenu} navMenu={navMenu} />}

      {!navMenu && (
        <div className="d-flex flex-grow-1 position-relative">
          <div className="d-none d-md-block">
            <SideBar />
          </div>

          <main
            className="outletWidth flex-grow-1 "
            style={{
              width: "100vw",
              maxWidth: "100vw",
              padding: "1rem",
              marginBottom: "100px",
            }}
          >
            <Outlet />
          </main>
        </div>
      )}

      {!navMenu && <Footer />}
    </div>
  );
};

export default Layout;
