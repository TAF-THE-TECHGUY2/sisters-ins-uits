import React, { useRef } from "react";
import "./Volunteer.css";

const Volunteer = () => {
  // Create a ref for the signup form section
  const signupFormRef = useRef(null);

  // Function to scroll to the signup form
  const scrollToSignupForm = () => {
    signupFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="volunteer-container">
      {/* Hero Section */}
      <section className="volunteer-hero">
        <h1>Empower Women. Inspire Change. Volunteer with SiS.</h1>
        <p>
          Join a community of passionate women working together to create a more
          inclusive and equitable legal landscape. Your time and skills can make
          a lasting impact.
        </p>
        <button className="volunteer-btn" onClick={scrollToSignupForm}>
          Sign Up to Volunteer
        </button>
      </section>

      {/* Why Volunteer Section */}
      <section className="why-volunteer">
        <h2>Why Volunteer?</h2>
        <div className="reasons-grid">
          <div className="reason">
            <h3>Personal Growth</h3>
            <p>
              Gain valuable skills in event planning, marketing, leadership, and
              collaboration while contributing to a meaningful cause.
            </p>
          </div>
          <div className="reason">
            <h3>Networking Opportunities</h3>
            <p>
              Connect with professionals, mentors, and like-minded individuals
              in the legal field and beyond.
            </p>
          </div>
          <div className="reason">
            <h3>Make a Difference</h3>
            <p>
              Play a vital role in empowering women and creating impactful
              programs that transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="volunteer-opportunities">
        <h2>Volunteer Opportunities</h2>
        <div className="opportunities-grid">
          <div className="opportunity">
            <h3>Event Planner</h3>
            <p>
              Organize impactful events like webinars, seminars, and workshops.
            </p>
          </div>
          <div className="opportunity">
            <h3>Social Media Manager</h3>
            <p>
              Spread the word about our mission through creative social media
              campaigns.
            </p>
          </div>
          <div className="opportunity">
            <h3>Fundraising Advocate</h3>
            <p>
              Support fundraising initiatives to bring SiS’s vision to life.
            </p>
          </div>
          <div className="opportunity">
            <h3>Mentorship Coordinator</h3>
            <p>
              Help pair mentors with mentees and oversee professional growth
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Signup Form Section */}
      <section className="volunteer-signup" ref={signupFormRef}>
        <h2>Get Involved</h2>
        <p>
          Fill out the form below to start your journey as a SiS volunteer.
          We’re excited to welcome you to the team!
        </p>
        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Contact Number" required />
          <select required>
            <option value="">Select Role of Interest</option>
            <option value="event-planner">Event Planner</option>
            <option value="social-media-manager">Social Media Manager</option>
            <option value="fundraising-advocate">Fundraising Advocate</option>
            <option value="mentorship-coordinator">
              Mentorship Coordinator
            </option>
          </select>
          <textarea placeholder="Tell us about your skills or why you want to volunteer" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Volunteer;
