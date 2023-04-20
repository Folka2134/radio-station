import React, { useEffect, useRef } from "react";

import "../App.css";

const Grid = () => {
  const images = []; // Add the other images to this array
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const images = grid.querySelectorAll(".image");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });
    images.forEach((image) => observer.observe(image));
  }, []);

  return (
    <div className="myGrid" ref={gridRef}>
      {[...Array(6)].map((_, rowIndex) => (
        <div className="row " key={rowIndex}>
          {[...Array(6)].map((_, colIndex) => (
            <img
              className="image"
              key={`${rowIndex}-${colIndex}`}
              src={images[colIndex % images.length]}
              alt="grid image"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
