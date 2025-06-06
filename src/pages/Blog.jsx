import React from "react";
import { blog } from "../assets/blogs";
import BlogCard from "../components/card/BlogCard";

const Blog = () => {
  return (
    <div className="w-100">
      <h1 className="row mb-3 p-2">Latest Blogs</h1>
      <div className="row" style={{ height: "auto" }}>
        {blog.map((item, index) => {
          return <BlogCard item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
