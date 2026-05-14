import React from "react";
import { blog } from "../assets/blogs";
import BlogCard from "../components/card/BlogCard";

const Blog = () => {
  return (
    <main className="az-page">
      <header className="az-section-head">
        <h1>writing</h1>
        <p>
          Notes on building product flows, backend features, dashboards, uploads,
          and the small front-end decisions that make apps feel complete.
        </p>
      </header>

      <section className="az-writing-list">
        {blog.map((item, index) => (
          <BlogCard key={item.title} item={item} index={index} />
        ))}
      </section>
    </main>
  );
};

export default Blog;
