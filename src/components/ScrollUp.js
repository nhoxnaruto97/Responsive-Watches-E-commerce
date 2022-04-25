import React, { useState, useEffect } from "react";
import "../css/scrollUp.css";

const ScrollUp = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <a
      onClick={goTop}
      href="#section"
      className={`scrollup ${showTopBtn ? "show-scroll" : ""}`}
      id="scroll-up"
    >
      <i className="bx bx-up-arrow-alt scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
