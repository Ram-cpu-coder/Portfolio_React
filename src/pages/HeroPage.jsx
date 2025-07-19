import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const HeroPage = () => {
  const { t } = useTranslation();

  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1.2 },
    });

    tl.fromTo(greetingRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0 })
      .fromTo(
        nameRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0 },
        "-=0.8"
      )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0 },
        "-=0.8"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0 },
        "-=0.6"
      )
      .fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      className="hero d-flex justify-content-center align-items-center text-center"
      style={{ minHeight: "70vh", padding: "2rem" }}
    >
      <div className="hero-content">
        <h1 ref={greetingRef} className="mb-2">
          {t("greeting")}
        </h1>
        <h1 ref={nameRef} className="mb-3">
          {t("line1")}
        </h1>

        <h2 ref={roleRef} className="mb-4">
          {t("line2")}
        </h2>

        <p ref={descRef} className="mb-4 px-2 px-md-5">
          {t("line3")}
        </p>

        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/projects">
            <button
              className="button rounded"
              ref={(el) => (buttonsRef.current[0] = el)}
            >
              {t("btn1")}
            </button>
          </Link>

          <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button
              className="button-white rounded"
              ref={(el) => (buttonsRef.current[1] = el)}
            >
              {t("btn2")}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
