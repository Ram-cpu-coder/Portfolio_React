import React from "react";
import SideBarFooter from "./SideBarFooter";

const Footer = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <SideBarFooter />
      <div className="text-center py-3">
        © {new Date().getFullYear()} Ram Kumar Dhimal. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
