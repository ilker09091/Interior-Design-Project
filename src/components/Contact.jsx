import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-img">
        <img src="/assets/hero-1.jpg" alt="" />
      </div>
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>
          Please leave us your info, so we can start our conversation to provide
          you with more information
        </p>

        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button className="btn" type="submit">
            Send Message <FaArrowRightLong />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
