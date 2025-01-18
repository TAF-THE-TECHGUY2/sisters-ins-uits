import React from "react";
import "./About.css";

const About = () => (
  <div className="about-container">
    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <h1>About Sisters in Suits</h1>
        <p>Empowering women in law to connect, grow, and lead.</p>
      </div>
    </section>

    {/* About Us Section */}
    <section className="about-section">
      <div className="content">
        <h2 className="section-title">Who We Are</h2>
        <p>
          <strong>‘Sisters in Suits NPC’</strong> (registration number:{" "}
          <strong>2024/636438/08</strong>) is a non-profit company incorporated
          in accordance with the Companies Act 71 of 2008.
        </p>
        <p>
          Founded in 2024 by <strong>Koketso Lediga</strong>,{" "}
          <strong>Yanela Ntloko</strong>, and <strong>Lesego Mabaso</strong>,
          SiS is an initiative for women by women, uniting professionals from
          diverse legal backgrounds.
        </p>
      </div>
    </section>

    {/* Mission & Vision Section */}
    <section className="mission-vision-section">
      <div className="content">
        <h2 className="section-title">Our Mission & Vision</h2>
        <p>
          At Sisters in Suits, our mission is to foster a supportive ecosystem
          for women in law to connect, socialize, learn, and collaborate. We
          achieve this through:
        </p>
        <div className="features">
          <div className="feature">
            <span className="icon">📘</span>
            <h3>Training Programs</h3>
            <p>Comprehensive skill-building and educational initiatives.</p>
          </div>
          <div className="feature">
            <span className="icon">🤝</span>
            <h3>Networking Events</h3>
            <p>Opportunities for women to share experiences and collaborate.</p>
          </div>
          <div className="feature">
            <span className="icon">🌟</span>
            <h3>Advocacy</h3>
            <p>
              Promoting diversity and inclusion across the legal and business
              sectors.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Objectives Section */}
    <section className="objectives-section">
      <div className="content">
        <h2 className="section-title">What We Do</h2>
        <ul className="objectives-list">
          <li>
            <strong>Training and Development:</strong> Empowering women through
            workshops and skill-building programs.
          </li>
          <li>
            <strong>Sisterhood & Networking:</strong> Creating spaces for women
            to connect, share, and collaborate.
          </li>
          <li>
            <strong>Women-Only Business Directory:</strong> Promoting
            women-owned businesses.
          </li>
          <li>
            <strong>Advocacy & Representation:</strong> Driving change for
            equality in legal and business fields.
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default About;
