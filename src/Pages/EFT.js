import React from "react";
import "./EFT.css";

const EFT = () => (
  <div className="eft-container">
    {/* Header Section */}
    <section className="eft-header">
      <h1>Donate via EFT</h1>
      <p>
        Please use the banking details below to make a direct transfer to
        support Sisters in Suits.
      </p>
    </section>

    {/* Banking Details */}
    <section className="bank-details">
      <h2>Banking Details</h2>
      <p>
        <strong>Account Name:</strong> Sisters in Suits NPC
      </p>
      <p>
        <strong>Bank:</strong> Standard Bank
      </p>
      <p>
        <strong>Account Number:</strong> 123456789
      </p>
      <p>
        <strong>Branch Code:</strong> 000000
      </p>
      <p>
        <strong>Reference:</strong> [Your Name or Contact Number]
      </p>
    </section>
  </div>
);

export default EFT;
