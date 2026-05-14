import React from "react";
import GithubContributionGraph from "../components/GithubContributionGraph";
import Skills from "../components/Skills";

const notes = [
  ["what i do", "React interfaces, Node APIs, MongoDB data models, auth, dashboards, and deployment-ready flows."],
  ["how i work", "I like simple layouts, readable code, steady iteration, and product details that reduce friction."],
  ["currently", "Building e-commerce and finance workflows while writing down the patterns I learn."],
];

const About = () => {
  return (
    <main className="az-page">
      <header className="az-section-head">
        <h1>about</h1>
        <p>
          I’m Ram, a MERN stack developer interested in building useful web
          products that are calm to use and solid underneath.
        </p>
      </header>

      <section className="az-note-grid">
        {notes.map(([title, body]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section className="az-split-section">
        <div>
          <h2>skills</h2>
          <Skills />
        </div>
        <div>
          <h2>github</h2>
          <GithubContributionGraph />
        </div>
      </section>
    </main>
  );
};

export default About;
