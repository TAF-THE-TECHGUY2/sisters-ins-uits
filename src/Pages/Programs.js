import React from "react";
import "../Pages/Programs";

const programs = [
  {
    title: "Leadership Training",
    description:
      "Empowering women to take leadership roles in the legal profession.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Mentorship Programs",
    description:
      "Connecting experienced professionals with young women in law.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Advocacy Campaigns",
    description:
      "Raising awareness about gender equality and representation in the legal field.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Legal Aid Services",
    description: "Providing free legal assistance to underserved communities.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Programs = () => {
  return (
    <div className="programs-page">
      <h1>Our Programs</h1>
      <p>
        Explore the initiatives that we are championing to empower women in the
        legal profession.
      </p>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.title} />
            <h2>{program.title}</h2>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
