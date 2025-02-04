import React from "react";
import "./Getinvolved.css";

const GetInvolved = () => (
  <div className="get-involved-container">
    {/* Hero Section */}
    <section className="get-involved-hero">
      <h1>Get Involved</h1>
      <p>
        Join us in empowering women in law by volunteering your time or donating
        to support our mission.
      </p>
    </section>

    {/* Volunteer Section */}
    <section className="get-involved-section volunteer-section">
      <div className="content">
        <h2 className="section-title">Volunteer</h2>
        <p>
          By lending your time and efforts as a SiS volunteer, you help bring
          our vision to life. From organizing events to participating in our
          initiatives, your assistance would help us build a stronger community.
          Whether you are skilled in marketing, event planning, or simply
          passionate about sisterhood, we would love to have you on board!
        </p>
        <button
          className="btn-primary"
          onClick={() => (window.location.href = "/volunteer")}
        >
          Become a Volunteer
        </button>
      </div>
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/image/image3.jpg`}
          alt="Volunteer with SiS"
        />
      </div>
    </section>

    {/* Donate Section */}
    <section className="get-involved-section donate-section">
      <div className="content">
        <h2 className="section-title">Donate</h2>
        <p>
          Your support helps us realize our mission and bring our vision to
          life. Every donation helps us host impactful events and provide
          resources to enable growth in our organization. Your contribution
          makes a difference. Partner with us in building a sustainable future.
        </p>
        <button
          className="btn-primary"
          onClick={() => (window.location.href = "/Donate")}
        >
          Donate Now
        </button>
      </div>
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/image/Donate.png`}
          alt="Donate to SiS"
        />
      </div>
    </section>
  </div>
);

export default GetInvolved;
