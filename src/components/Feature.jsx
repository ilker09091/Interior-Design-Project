import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import { FaBath, FaTableList } from "react-icons/fa6";
import { MdCallToAction } from "react-icons/md";
import "./Feature.css";
function Feature() {
  return (
    <div className="feature-container">
      {" "}
      <div className="text-content">
        {" "}
        <h3>Modern facilities, spacious garden, beautiful views</h3>{" "}
        <p>
          {" "}
          Office ipsum you must be muted. We've centric while manager point
          discussions talk hands gave net. Tiger read switch solutions any
          banner re-inventing dunder.{" "}
        </p>{" "}
      </div>{" "}
      <div className="image-content">
        {" "}
        <div className="image-content-01">
          {" "}
          <img src="/assets/feature-1.webp" alt="" />{" "}
          <div className="icons">
            {" "}
            <div className="icon">
              {" "}
              <FaBath /> <p>Bathroom</p>{" "}
            </div>{" "}
            <div className="icon">
              {" "}
              <FaHouseDamage /> <p>1 Floor</p>{" "}
            </div>{" "}
            <div className="icon">
              {" "}
              <FaTableList /> <p>Full Interioe</p>{" "}
            </div>{" "}
            <div className="icon">
              {" "}
              <MdCallToAction /> <p>AC -5</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="image-content-02">
          {" "}
          <img src="/assets/feature-2.jpg" alt="" />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Feature;
