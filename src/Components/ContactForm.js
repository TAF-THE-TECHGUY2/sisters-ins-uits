import React from "react";
import "./contact.css";

const ContactForm = () => (
  <form>
    <input type="text" placeholder="Your Name" required />
    <input type="email" placeholder="Your Email" required />
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
