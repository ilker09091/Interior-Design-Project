import React from "react";
import { FaBasketball, FaPaintRoller } from "react-icons/fa6";
import "./HomeDesign.css";
import { FaHome } from "react-icons/fa";

function HomeDesign() {
  return (
    <div className="home-design">
      <div className="design-header">
        <h2 className="gallery-title">Home Design</h2>
      </div>
      <div
        className="content"
        style={{
          backgroundImage:
            "url(https://www.manorbuild.co.nz/hs-fs/hubfs/Floorplans/New%203D/VILLA%20-%20Floorplan%20%5BReduced%5D.png?width=1200&length=1200&name=VILLA%20-%20Floorplan%20%5BReduced%5D.png)",
        }}
      >
        <div>
          <p>
            Office ipsum you must be muted. We've centric while manager point
            discussions talk hands gave net. Tiger read switch solutions any
            banner re-inventing dunder.
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <FaHome />
          <div>
            <h3>Architecture</h3>
            <p>
              Office ipsum you must be muted. We've centric while manager point
              discussions talk hands gave
            </p>
          </div>
        </div>
        <div className="card">
          <FaPaintRoller />
          <div>
            <h3>Interior Design</h3>
            <p>
              Office ipsum you must be muted. We've centric while manager point
              discussions talk hands gave
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesign;
