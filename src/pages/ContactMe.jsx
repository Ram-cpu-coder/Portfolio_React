import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:ramkumardhimal2058@gmail.com?subject=Portfolio message from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`)}`;
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="az-page">
      <header className="az-section-head">
        <h1>contact</h1>
        <p>
          Have an app idea, a full-stack feature, or a collaboration in mind?
          Send a note and I’ll meet you there.
        </p>
      </header>

      <section className="az-contact-grid">
        <div className="az-contact-note">
          <a href="mailto:ramkumardhimal2058@gmail.com">ramkumardhimal2058@gmail.com</a>
          <span>available for remote full-stack work</span>
        </div>

        <form className="az-contact-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="name" value={formData.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="message" rows="6" value={formData.message} onChange={handleChange} required />
          <button type="submit">send</button>
        </form>
      </section>
    </main>
  );
};

export default ContactMe;
