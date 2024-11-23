import React from 'react';
import './GetInTouch.css';

function GetInTouch() {
  const contactDetails = [
    {
      icon: "📧",
      label: "Email",
      value: "patnaikbabita@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+1(573)778-6625",
    },
    {
      icon: "📍",
      label: "Location",
      value: "Poplar Bluff, Missouri, United States",
    },
  ];

  const socialLinks = [
    {
      icon: <i className="ri-linkedin-fill"></i>,
      url: "https://www.linkedin.com/in/babita-patnaik-a1616555?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      label: "LinkedIn",
    },
    {
      icon: <i className="ri-facebook-circle-fill"></i>,
      url: "https://bg-bg.facebook.com/babita.patnaik.148",
      label: "Facebook",
    },
    {
      icon: <i className="ri-instagram-line"></i>,
      url: "https://www.instagram.com/sheelaventures/",
      label: "Instagram",
    },
  ];

  return (
    <div className="get-in-touch-container">
      <h1 className="get-in-touch-title">Get in Touch</h1>
      <div className="contact-cards">
        {contactDetails.map((detail, index) => (
          <div key={index} className="contact-card">
            <div className="contact-icon">{detail.icon}</div>
            <h3>{detail.label}</h3>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
      <footer className="footer">
        <img
          src={`${process.env.PUBLIC_URL}/babita.jpg`}
          alt="Babita Patnaik"
          className="profile-photo"
        />
        <p className="footer-text">
          Pediatric Occupational Therapist | ISHA Meditator | 
          Podcaster & Live Show Host | Animal Lover | Outdoor Enthusiast | 
          Travel Buff | Sensory Integration Specialist
        </p>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="footer-note">©2024 Babita Patnaik | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default GetInTouch;
