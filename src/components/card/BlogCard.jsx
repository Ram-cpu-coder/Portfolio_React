import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

const BlogCard = ({ item, index }) => {
  const { title, description, img, link, date } = item;
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: index * 0.2,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef} className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="p-4 border rounded h-100 d-flex flex-column shadow-sm blog-card">
        {img && (
          <img
            src={img}
            alt={title}
            className="mb-3 w-100 rounded"
            style={{ objectFit: "cover", maxHeight: "200px" }}
          />
        )}

        <h4 className="mb-1">{title}</h4>
        <small className="text-muted mb-2">{date}</small>
        <p className="flex-grow-1">{description.slice(0, 200)}...</p>

        <div className="text-end">
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
