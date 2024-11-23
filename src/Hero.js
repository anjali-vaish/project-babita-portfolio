import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Babita Patnaik";
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index < fullText.length) {
        setTimeout(typeLetter, 200);
      }
    };

    typeLetter();

    return () => setDisplayedText("");
  }, []);

  const handleAnimation = () => {
    document.body.classList.add('start-animation');
    setTimeout(() => {
      document.body.classList.remove('start-animation');
      navigate('/about');
    }, 1000);
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="typing">{displayedText}</h1>
        <p>
          Experienced in pediatric therapy across school and clinical settings, Babita Patnaik specializes in sensory and motor skill development, blending mindfulness to support children’s growth and well-being.
        </p>
        <button className="cta-button" onClick={handleAnimation}>
          Let's get started
        </button>
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={`${process.env.PUBLIC_URL}/babita.jpg`} alt="Babita Patnaik" />
          </div>
          <div className="flip-card-back">
            <p>Occupational Therapist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
