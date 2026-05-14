import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const BlogCard = ({ item, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, delay: index * 0.08, ease: "power3.out" }
    );
  }, [index]);

  return (
    <a className="az-writing-item" href={item.link} target="_blank" rel="noopener noreferrer" ref={cardRef}>
      <span>{item.date}</span>
      <h2>{item.title}</h2>
      <p>{item.description.slice(0, 150)}...</p>
    </a>
  );
};

export default BlogCard;
