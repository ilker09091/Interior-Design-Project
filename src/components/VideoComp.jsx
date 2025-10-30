import React from "react";
import { FaPlay } from "react-icons/fa";
import "./VideoComp.css";

function VideoComp() {
  return (
    <div className="video-container">
      <img
        src="/assets/hero-2.jpg"
        alt="Video Thumbnail"
        className="video-img"
      />
      <div className="play-button">
        <FaPlay />
      </div>
    </div>
  );
}

export default VideoComp;
