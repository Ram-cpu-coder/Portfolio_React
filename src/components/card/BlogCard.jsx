import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

const BlogCard = ({ item, index }) => {
  const { title, description, img, link, date } = item;
  const cardRef = useRef(null); // Create a ref

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: index * 0.3,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []); // Run
  return (
    <div className="w-100 container" ref={cardRef}>
      <div
        className={`d-flex justify-content-between projectCard align-items-center border p-2 rounded gap-2 flex-column flex-sm-row`}
      >
        <img
          className="border col-6"
          src={img}
          alt={title}
          style={{ height: "200px", width: "40%" }}
        />
        <div
          className="d-flex flex-column col-6 px-2"
          style={{ height: "200px", width: "60%" }}
        >
          <strong>{title}</strong>
          <p>{date}</p>
          <p>{description.slice(0, 200)}...</p>
          <div className="d-flex col-12 justify-content-end">
            <Button className="col-3">
              <a href={link} className="text-decoration-none text-white">
                Read More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
