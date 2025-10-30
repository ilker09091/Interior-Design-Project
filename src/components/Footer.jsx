import React from "react";
import {
  FaHome,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const sponsors = [
    {
      name: "Modus.ge",
      logo: "https://modus.ge/assets/imgs/logo_ka.png",
    },
    {
      name: "Zodi.ge",
      logo: "https://zodi.ge/wp-content/uploads/2021/03/3-4.png",
    },
    {
      name: "Ideal.ge",
      logo: "https://ideal.ge/templates/gallerydemasi/images/logo1.png",
    },
    {
      name: "Caparol.ge",
      logo: "https://www.friendlymaterials.com/media/brands/22/Caparol_logo_v1.png",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Üst Kısım */}
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Zygronix</h2>
            <p>
              Redefining spaces through innovative design and meticulous
              craftsmanship.
            </p>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/layout">Gallery</a>
                </li>
                <li>
                  <a href="/services">How to get</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="/interior">Interior Design</a>
                </li>
                <li>
                  <a href="/furniture">Renovation</a>
                </li>
                <li>
                  <a href="/renovation">Furniture</a>
                </li>
              </ul>
            </div>

            <div className="link-column">
              <h4>Contact</h4>
              <ul>
                <li>Adress: Tbilisi, Georgia</li>
                <li>
                  <a href="tel:+995595548080">Phone: +995 595 54 80 80</a>
                </li>
                <li>
                  <a href="mailto:Zygronix.ge">Email: Zygronix.ge</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zygronix.ge/">
                    Instagram: @zygronix.ge
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sponsorlar */}
        <div className="sponsors-section">
          <h4>Sponsors</h4>
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-item">
                <img src={sponsor.logo} alt={sponsor.name} />
                <span>{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="footer-bottom">
          <div className="social-links">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>

          <div className="copyright">
            <p>&copy; 2025 Zygronix LLC. All Rights Reserved!</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
