import React from "react";
import HeroBanner from "../Components/HeroBanner";
import "./Home.css";

const Home = () => (
  <>
    {/* Hero Banner */}
    <HeroBanner />
    {/* About Section */}
    <section className="container about-section">
      <div className="section-content">
        <div className="text-content">
          <h2 className="section-title">About Sisters in Suits</h2>
          <p>
            Sisters in Suits, affectionately known as SiS, is a community
            dedicated to empowering women in the legal profession. Whether
            you’re pursuing a law degree, working as an attorney, advocate,
            in-house legal counsel, or exploring entrepreneurship, we are here
            to support, uplift, and inspire you.
          </p>
        </div>
        <div className="image-content">
          <img
            src={`${process.env.PUBLIC_URL}/image/community.jpg`}
            alt="About Sisters in Suits"
          />
        </div>
      </div>
    </section>
    {/* Daily Motivation Section */}
    <section className="container motivation-section">
      <div className="section-content">
        <div className="text-content">
          <h2 className="section-title">Daily Motivation</h2>
          <blockquote>
            "Empowered women empower the world. Together, we can achieve
            greatness."
          </blockquote>
        </div>
        <div className="image-content">
          <img
            src={`${process.env.PUBLIC_URL}/image/MotivationQoute.jpg`}
            alt="Daily Motivation"
          />
        </div>
      </div>
    </section>
    {/* Defining Sisterhood Section */}
    <section className="container sisterhood-section">
      <div className="section-content">
        <div className="image-content">
          <img
            src={`${process.env.PUBLIC_URL}/image/image5.jpg`}
            alt="Defining Sisterhood"
          />
        </div>
        <div className="text-content">
          <h2 className="section-title">Defining Sisterhood</h2>
          <p>
            At SiS, sisterhood is more than a word—it’s a bond. We believe in
            the transformative power of strong relationships among women,
            fostering a supportive community where we celebrate each other’s
            victories and lift each other through challenges.
          </p>
        </div>
      </div>
    </section>
    {/* Milestones Section 
    <section className="container milestones-section">
      <div className="section-content">
        <div className="text-content">
          <h2 className="section-title">Our Milestones</h2>
          <ul className="milestones-list">
            <li>
              <strong>2015:</strong> SiS was founded with the mission of
              empowering women in law.
            </li>
            <li>
              <strong>2018:</strong> Launched our mentorship program, connecting
              students with experienced legal professionals.
            </li>
            <li>
              <strong>2021:</strong> Expanded globally, building a network of
              5,000+ women in law across continents.
            </li>
            <li>
              <strong>2023:</strong> Hosted our first international leadership
              conference.
            </li>
          </ul>
        </div>
        <div className="image-content">
          <img
            src={`${process.env.PUBLIC_URL}/image/wolaw.png`}
            alt="Our Milestones"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
    </section>
    */}
    {/* Testimonials Section 
    <section className="container testimonials-section">
      <div className="section-content">
        <div className="text-content">
          <h2 className="section-title">What Our Members Say</h2>
          <p>
            “Joining SiS has been the best decision of my career. The mentorship
            and community have helped me grow both personally and
            professionally.”
          </p>
          <p>
            “SiS is more than a network—it’s a family. The support I’ve received
            has been invaluable.”
          </p>
        </div>
        <div className="image-content">
          <img
            src={`${process.env.PUBLIC_URL}/image/memberlaw.png`}
            alt="What Our Members Say"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
    </section>
    */}
    {/* Newsletter Subscription Section */}
    <section className="container newsletter-section">
      <div className="section-content">
        <div className="text-content">
          <h2 className="section-title">Stay Updated</h2>
          <p>
            Subscribe to our newsletter to receive the latest updates, events,
            and resources from SiS.
          </p>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
        <div className="image-content">
          <img
            src={`${process.env.PUBLIC_URL}/image/image7.jpg`}
            alt="About Sisters in Suits"
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>
    </section>
  </>
);

export default Home;
