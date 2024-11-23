import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Experience.css';

const experiences = [
  {
    year: "2022",
    title: "Pediatric OT",
    description:
      "Pediatric occupational therapist at Ozarks Healthcare, specializing in sensory integration.",
    duration: "Oct 2022 - Present",
    location: "West Plains, Missouri, United States",
  },
  {
    year: "2010",
    title: "Company Owner/Admin",
    description:
      "Managed Sunrise Home Care LLC, specializing in quality assurance and project management.",
    duration: "Oct 2010 - Aug 2022",
    location: "Poplar Bluff, Missouri, United States",
  },
  {
    year: "2005",
    title: "Lead OT",
    description:
      "Led Advanced Therapy Services, focusing on clinical monitoring and operational management.",
    duration: "Jul 2005 - May 2020",
    location: "Poplar Bluff, Missouri, United States",
  },
  {
    year: "2002",
    title: "Rehabilitation Coordinator",
    description:
      "Served as RehabCare coordinator, specializing in orthopedic and neurological conditions.",
    duration: "Jul 2002 - Jul 2004",
    location: "Campbell, Missouri, United States",
  },
  {
    year: "1994",
    title: "Occupational Therapist",
    description:
      "Worked at Sunshine Rehab Inc, focusing on nursing home and outpatient orthopedic rehabilitation.",
    duration: "May 1994 - Oct 1994",
    location: "Detroit, Michigan, United States",
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleCertificationsNavigation = () => {
    navigate('/certifications');
  };

  return (
    <div className="experience-container">
      <h1 className="experience-title">Professional Experience</h1>
      <div className="timeline">
        {/* Curvy Line */}
        <svg
          className="timeline-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C250,50 750,150 1000,100"
            stroke="#00565B"
            strokeWidth="4"
            fill="transparent"
          />
        </svg>

        {/* Timeline Items */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="circle">
              {exp.year}
              {activeIndex === index && (
                <div className="experience-box">
                  <h3>{exp.title}</h3>
                  <p>{exp.description}</p>
                  <p>
                    <strong>Duration:</strong> {exp.duration}
                  </p>
                  <p>
                    <strong>Location:</strong> {exp.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Downward Arrow Button */}
      <button
        className="next-section-button"
        onClick={handleCertificationsNavigation}
      >
        <span>Check out my Certifications!</span>
        <div className="downward-arrow">↓</div>
      </button>
    </div>
  );
}

export default Experience;
