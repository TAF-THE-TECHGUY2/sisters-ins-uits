import React from "react";
import "./contact.css";
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => (
  <div className="contact-container">
    {/* Header Section */}
    <section className="contact-header">
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or
        want to get involved, feel free to reach out to us through any of the
        channels below.
      </p>
    </section>

    {/* Social Media Section */}
    <section className="social-media-section">
      <h2>Connect with Us</h2>
      <div className="social-media-links">
        <a
          href="https://www.instagram.com/sisters_in_suits/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} color="#E4405F" />
          <span>Instagram: sisters_in_suits</span>
        </a>
        <a
          href="https://www.tiktok.com/@sisinsuits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok size={30} color="#000000" />
          <span>TikTok: sisinsuits</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61567267777687&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} color="#1877F2" />
          <span>Facebook: Sisters In Suits</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} color="#1DA1F2" />
          <span>Twitter: sis_in_suits</span>
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} color="#0077B5" />
          <span>LinkedIn: Sisters In Suits</span>
        </a>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="contact-form-section">
      <h2>Send Us a Message</h2>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Your message has been sent!");
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
);

export default Contact;
