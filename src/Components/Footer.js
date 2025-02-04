import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => (
  <footer>
    <p>© 2025 Sisters In Suits</p>
    <div className="social-icons">
      <a
        href="https://www.instagram.com/sisters_in_suits/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@sisinsuits"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <FaTiktok />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61567267777687&mibextid=LQQJ4d"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

export default Footer;
