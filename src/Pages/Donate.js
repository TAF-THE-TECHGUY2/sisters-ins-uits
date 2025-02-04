import React from "react";
import "./Donate.css";

const Donate = () => (
  <div className="donate-container">
    {/* Header Section */}
    <section className="donate-header">
      <h1>Donate to Support SiS</h1>
      <p>
        Sisters in Suits (SiS) is a non-profit organization committed to
        empowering women in the legal profession. Your contribution enables us
        to host impactful events, provide educational resources, and grow our
        community.
      </p>
    </section>

    {/* Donation Options */}
    <section className="donate-options">
      <h2>Choose Your Donation Method</h2>
      <div className="donate-buttons">
        <button
          className="donate-btn"
          onClick={() => window.open("https://www.paypal.com", "_blank")}
        >
          Donate via PayPal
        </button>
        <button
          className="donate-btn"
          onClick={() => (window.location.href = "/eft")}
        >
          Donate via EFT
        </button>
      </div>
    </section>

    {/* Icons Section */}
    <section className="donate-icons">
      <img src={`${process.env.PUBLIC_URL}/image/Paypal.png`} alt="PayPal" />
      <img
        src={`${process.env.PUBLIC_URL}/image/Mastercard.png`}
        alt="Bank Transfer"
      />
    </section>
  </div>
);

export default Donate;
