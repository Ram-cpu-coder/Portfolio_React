import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="" style={{ minHeight: "85vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
