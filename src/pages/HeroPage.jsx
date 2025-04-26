import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AnimatedText } from "animated-backgrounds";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const HeroPage = () => {
  const { t, ready } = useTranslation();
  const nameRef = useRef(null);
  const greetingRef = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);

  useEffect(() => {
    const animateElement = (ref, options) => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, ...options.from },
        { opacity: 1, duration: 2, ease: "power3.out", ...options.to }
      );
    };

    animateElement(nameRef, { to: { delay: 0.2 } });
    animateElement(roleRef, { to: { delay: 0.6 } });
    animateElement(descRef, { to: { delay: 1 } });

    gsap.fromTo(
      greetingRef.current,
      {
        opacity: 0,
        scale: 2,
      },
      {
        opacity: 1,
        duration: 0.5,
        scale: 1,
      }
    );
    gsap.fromTo(
      btnRef1.current,
      { opacity: 0, x: -100 },
      { x: 0, opacity: 1, duration: 2, delay: 1.4, ease: "power3.out" }
    );
    gsap.fromTo(
      btnRef2.current,
      { opacity: 0, x: 100 },
      { x: 0, opacity: 1, duration: 2, delay: 1.4, ease: "power3.out" }
    );
  }, []);
  // if (!ready) {
  //   console.log(ready, "ready");
  //   return (
  //     <div className="100-vh d-flex justify-content-center align-items-center">
  //       Loading ...
  //     </div>
  //   );
  // }
  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative"
      style={{ minHeight: "60vh" }}
    >
      <div>
        <div ref={nameRef} className="text-center">
          <h1 ref={greetingRef}>{t("greeting")}</h1>
          <h1>{t("line1")}</h1>
        </div>
        <h2 ref={roleRef} className="text-center">
          {t("line2")}
          {/* <AnimatedText
            text=" A Software Developer"
            effect="typewriter"
            config={{
              speed: 100,
              loop: true,
              delay: 1000,
            }}
          /> */}
        </h2>
        <p className="py-2 text-center" ref={descRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          delectus!
        </p>
        <div className="d-flex gap-4 justify-content-center">
          <Link to="/projects" className="">
            <button className="button rounded" ref={btnRef1}>
              {t("btn1")}
            </button>
          </Link>
          <Link to="/resume" className="">
            <button className="button-white rounded" ref={btnRef2}>
              {t("btn2")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
