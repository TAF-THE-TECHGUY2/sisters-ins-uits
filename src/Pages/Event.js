import React from "react";
import "./Events.css";

const Events = () => (
  <div className="events-container">
    {/* Hero Section */}
    <section className="events-hero">
      <h1>Our Events</h1>
      <p>
        Empowering connections, learning, and growth through impactful events.
      </p>
    </section>

    {/* Networking Section */}
    <section className="event-section networking-section">
      <div className="content">
        <h2 className="section-title">Networking and Socializing</h2>
        <p>
          SiS networking events provide a platform for women professionals to
          connect, collaborate, and foster a space for meaningful connections.
          These opportunities empower women of colour, enabling growth and
          fellowship in a welcoming environment.
        </p>
      </div>
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/image/networking.png`}
          alt="Networking and Socializing"
        />
      </div>
    </section>

    {/* Webinars Section */}
    <section className="event-section webinars-section">
      <div className="content">
        <h2 className="section-title">Webinars and Seminars</h2>
        <p>
          Our webinars and seminars focus on equipping members with educational
          content spanning the fields of law, accounting, and business, making
          them an invaluable resource for personal and professional growth.
        </p>
      </div>
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/image/Seminar.png`}
          alt="Webinars and Seminars"
        />
      </div>
    </section>
  </div>
);

export default Events;
