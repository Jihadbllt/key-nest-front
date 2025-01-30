import React, { useState } from "react";
import "./CarouselComp.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button previous" onClick={handlePrevious}>
        ❮
      </button>
      <div className="carousel-images">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="fade"
        />
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        ❯
      </button>
    </div>
  );
};

export default Carousel;