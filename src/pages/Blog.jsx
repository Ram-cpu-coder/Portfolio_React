import React from "react";
import { blog } from "../assets/blogs";
import BlogCard from "../components/card/BlogCard";

const Blog = () => {
  return (
    <div className="w-100 ">
      <h1 className="row pb-3">Latest Blogs</h1>
      <div className="row d-flex flex-column gap-4">
        {blog.map((item, index) => {
          return <BlogCard item={item} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
