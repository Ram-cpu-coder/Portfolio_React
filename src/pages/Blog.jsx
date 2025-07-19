import React from "react";
import { blog } from "../assets/blogs";
import BlogCard from "../components/card/BlogCard";

const Blog = () => {
  return (
    <div className="container py-5">
      <div className="row mb-5 text-center">
        <div className="col">
          <h1 className="fw-bold display-4">Latest Blogs</h1>
          <p className="text-muted fs-5">Insights, stories & updates</p>
        </div>
      </div>

      <div className="row">
        {blog.map((item, index) => (
          <BlogCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
