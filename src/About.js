import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const [animateSpecializations, setAnimateSpecializations] = useState(false);
  const navigate = useNavigate();

  const scrollToSpecializations = () => {
    const specializationsSection = document.getElementById('specializations');
    specializationsSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setAnimateSpecializations(true), 1000); // Start animation after 1 second
  };

  const navigateToExperience = () => {
    navigate('/experience');
  };

  return (
    <div className="about-container">
      <div className="about-intro">
        <h1>About Me</h1>
        <p>
          I’m <strong>Babita Patnaik</strong>, a Pediatric Occupational Therapist with extensive experience in empowering children through evidence-based, child-centered interventions. Passionate about holistic care, I incorporate mindfulness, creative learning, and outdoor exploration to help children achieve their fullest potential.
        </p>
        <p>
          As a podcaster and live show host, I advocate for pediatric mental health and inclusive education, using my voice to inspire and educate. My love for animals and nature enhances my therapeutic approach, fostering emotional and physical growth in children.
        </p>
      </div>

      {/* Blinking Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={scrollToSpecializations}>
        <p>Here's what I specialize in</p>
        <div className="down-arrow">⬇</div>
      </div>

      {/* Specializations Section */}
      <div id="specializations" className="specializations-section">
        <h2>Specializations</h2>
        <ul className="specializations-list">
          {[
            'Sensory Integration',
            'Fine & Gross Motor Skill Development',
            'Neurodevelopmental Disorders',
            'Cognitive Behavioral Interventions',
            'Mindfulness in Pediatric Care',
          ].map((specialization, index) => (
            <li
              key={index}
              className={`specialization-item ${
                animateSpecializations
                  ? index % 2 === 0
                    ? 'appear-from-left'
                    : 'appear-from-right'
                  : ''
              }`}
              style={{
                animationDelay: `${animateSpecializations ? index * 0.5 : 0}s`,
              }}
            >
              {specialization}
            </li>
          ))}
        </ul>
      </div>

      {/* Button to Navigate to Experience Section */}
      <button className="next-section-button" onClick={navigateToExperience}>
        <span className="arrow">→</span>
      </button>
    </div>
  );
}

export default About;
