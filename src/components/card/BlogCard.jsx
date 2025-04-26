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
    <div className="w-100 container" ref={cardRef} style={{ height: "auto" }}>
      <div
        className={`d-flex justify-content-center projectCard align-items-start border p-2 rounded gap-2 flex-column flex-sm-row`}
        style={{ height: "100%" }}
      >
        <img className="border col-sm-5 col-12" src={img} alt={title} />
        <div
          className="d-flex flex-column col-sm-7 col-12 px-2"
          style={{ height: "100%" }}
        >
          <strong>{title}</strong>
          <p>{date}</p>
          <p>{description.slice(0, 200)}...</p>
          <div className="d-flex justify-content-end">
            <Button className="">
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
