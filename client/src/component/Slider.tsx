import React, { useState } from 'react';
import './Slider.css';

interface SliderProps {
  imgs: string[];
}

const Slider: React.FC<SliderProps> = ({ imgs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imgs.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgs.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider-container">
      <div className="slider">
        
        {imgs.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={img} alt="" />
          </div>
        ))}
        <div className="side-img left">
          <img src={imgs[(currentIndex - 1 + imgs.length) % imgs.length]} alt="" />
        </div>
        <div className="side-img right">
          <img src={imgs[(currentIndex + 1) % imgs.length]} alt="" />
        </div>
        <div className="prev" onClick={handlePrevClick}>
          &#10094;
        </div>
        <div className="next" onClick={handleNextClick}>
          &#10095;
        </div>
        <div className="circles">
          {imgs.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`circle ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
