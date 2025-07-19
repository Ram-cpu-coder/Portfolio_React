import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="container d-grid align-items-center w-75"
      style={{ minHeight: "80vh" }}
    >
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
        {/* Left: Text Section */}
        <div className="text-center text-md-start w-100 w-md-50">
          <strong className="fs-1 d-block mb-3">Get in Touch</strong>
          <div className="fs-4 mb-4">
            Want to chat?{" "}
            <a
              href="mailto:ramkumardhimal2058@gmail.com"
              className="text-decoration-none"
            >
              Email now
            </a>
          </div>
        </div>

        {/* Right: Form Section */}
        <div className="card shadow p-4 w-100 w-md-50">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
