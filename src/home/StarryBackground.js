import React, { useEffect } from "react";
import "./background.css";

const StarryBackground = () => {
  useEffect(() => {
    const starCount = 100;
    const container = document.querySelector(".starry-background");

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      const size = Math.random() * 3 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      container.appendChild(star);
    }
  }, []);

  return <div className="starry-background"></div>;
};

export default StarryBackground;
