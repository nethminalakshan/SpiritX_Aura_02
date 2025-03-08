import React, { useState, useEffect } from 'react';
import './slider.css';

const Slider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider">
      <div className="list">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} />
            <div className="content">
              <p>Welcome to the Official Website of</p>
              <h2 style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif", fontStyle: 'italic' }}>SPIRIT.11</h2>
              <p>Latest Soccer News | League & Transfer News | Scores & Match Reports</p>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={prevSlide} aria-label="Previous slide">
          &lt;
        </button>
        <button id="next" onClick={nextSlide} aria-label="Next slide">
          &gt;
        </button>
      </div>

      <div className="thumbnail">
        {images.map((image, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={image.src} alt={`Thumbnail ${index + 1}`} />
            <div className="content">Name Slider</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;