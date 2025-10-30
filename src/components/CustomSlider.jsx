import { useRef, useState, useEffect } from "react";
import "./slider.css";

function CustomSlider({ children, interval = 5000 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);

  const slideNext = () => {
    setActiveIndex((prev) => (prev >= children.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? children.length - 1 : prev - 1));
    setProgress(0);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          slideNext();
          return 0;
        }
        return prev + 1;
      });
    }, interval / 100);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  return (
    <div
      className="container__slider"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Progress Bar */}
      <div className="slider__progress" style={{ width: `${progress}%` }} />

      {/* Slides */}
      {children.map((item, index) => (
        <div
          key={index}
          className={`slider__item ${
            index === activeIndex ? "slider__item-active" : ""
          }`}
        >
          {item}
        </div>
      ))}

      {/* Dots */}
      <div className="container__slider__links">
        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? "container__slider__links-small container__slider__links-small-active"
                : "container__slider__links-small"
            }
            onClick={() => {
              setActiveIndex(index);
              setProgress(0);
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="slider__btn-prev" onClick={slidePrev}>
        ‹
      </button>
      <button className="slider__btn-next" onClick={slideNext}>
        ›
      </button>
    </div>
  );
}

export default CustomSlider;
