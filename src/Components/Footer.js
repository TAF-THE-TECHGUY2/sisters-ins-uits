import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer>
    <p>© 2025 African Women in Law</p>
    <div className="social-icons">
      <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
    </div>
  </footer>
);

export default Footer;
