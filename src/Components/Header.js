import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
  <header className="custom-header">
    <div className="container">
      <div className="logo-container">
        <img
          src={`${process.env.PUBLIC_URL}/image/Logo.jpg`}
          alt="Sisters in Suits Logo"
          className="logo"
        />
        <h1>Sisters in Suits</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/Get">Get involved</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
