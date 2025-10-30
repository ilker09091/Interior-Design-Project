import React from "react";
import "./Hero.css";
import CustomSlider from "./CustomSlider";
import { images } from "../data/Images";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  return (
    <div className="hero-container">
      <CustomSlider className="hero-slider" interval={5000}>
        {images.map((image, index) => (
          <div className="slider-item-wrapper" key={index}>
            <img
              src={image.imgURL}
              alt={image.imgAlt}
              className="hero-slider-image"
            />
            {/* Gradient Overlay */}
            <div className="slider-overlay"></div>
          </div>
        ))}
      </CustomSlider>

      <div className="hero-content">
        <div className="hero-badge">
          <span>Premium Living</span>
        </div>

        <h1 className="hero-title">
          Your Dream Home,
          <span className="title-accent"> Your Needs Met.</span>
        </h1>

        <p className="hero-description">
          Discover the perfect home that matches your lifestyle. Luxury meets
          comfort in every detail of our premium properties.
        </p>

        <div className="hero-actions">
          <button className="btn btn-primary">
            Explore Properties
            <FaArrowRightLong className="btn-icon" />
          </button>
          <button className="btn btn-secondary">Virtual Tour</button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">Properties</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>Scroll Down</span>
      </div>
    </div>
  );
}

export default Hero;
