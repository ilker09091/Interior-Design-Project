import React, { useRef, useState } from "react";
import "./Gallery.css";

function Gallery() {
  const galleryRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const galleryItems = [
    {
      id: 1,
      title: "Doğa Manzarası",
      imageUrl: "https://picsum.photos/400/300?random=1",
      category: "Doğa",
    },
    {
      id: 2,
      title: "Şehir Yaşamı",
      imageUrl: "https://picsum.photos/400/300?random=2",
      category: "Şehir",
    },
    {
      id: 3,
      title: "Portre Çalışması",
      imageUrl: "https://picsum.photos/400/300?random=3",
      category: "Portre",
    },
    {
      id: 4,
      title: "Mimari Detay",
      imageUrl: "https://picsum.photos/400/300?random=4",
      category: "Mimari",
    },
    {
      id: 5,
      title: "Sokak Sanatı",
      imageUrl: "https://picsum.photos/400/300?random=5",
      category: "Sanat",
    },
    {
      id: 6,
      title: "Gece Işıkları",
      imageUrl: "https://picsum.photos/400/300?random=6",
      category: "Gece",
    },
    {
      id: 7,
      title: "Yemek Fotoğrafçılığı",
      imageUrl: "https://picsum.photos/400/300?random=7",
      category: "Yemek",
    },
    {
      id: 8,
      title: "Macera Sporları",
      imageUrl: "https://picsum.photos/400/300?random=8",
      category: "Spor",
    },
  ];

  const scroll = (direction) => {
    const container = galleryRef.current;
    const scrollAmount = 400;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });

      // Scroll pozisyonuna göre butonları güncelle
      setTimeout(() => {
        setShowLeftBtn(container.scrollLeft > 0);
        setShowRightBtn(
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }, 300);
    }
  };

  const handleScroll = () => {
    const container = galleryRef.current;
    if (container) {
      setShowLeftBtn(container.scrollLeft > 0);
      setShowRightBtn(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2 className="gallery-title">Recent Gallery</h2>
        <div className="gallery-controls">
          <button
            className={`nav-btn left ${!showLeftBtn ? "hidden" : ""}`}
            onClick={() => scroll("left")}
            aria-label="Previous Image"
          >
            ‹
          </button>
          <button
            className={`nav-btn right ${!showRightBtn ? "hidden" : ""}`}
            onClick={() => scroll("right")}
            aria-label="Next Image"
          >
            ›
          </button>
        </div>
      </div>

      <div
        className="horizontal-gallery"
        ref={galleryRef}
        onScroll={handleScroll}
      >
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="card-image">
              <img src={item.imageUrl} alt={item.title} />
              <div className="card-overlay">
                <button className="view-btn">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dots">
          {galleryItems.map((_, index) => (
            <span key={index} className="dot"></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
