import React from "react";

const ContactMe = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "60vh" }}
    >
      <strong className=" fs-1">Get in Touch</strong>
      <div className=" fs-3">
        Want to chat? &nbsp;
        <a
          href="mailto:ramkumardhimal2058@gmail.com"
          className="text-decoration-none"
        >
          Email now
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
