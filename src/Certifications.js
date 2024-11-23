import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Certifications.css';

function Certifications() {
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const certifications = [
    {
      title: "Primitive Reflex Clinical Specialist",
      description:
        "Awarded by Evergreen Certifications, this certification recognizes expertise in integrating primitive reflex training to enhance neurological and sensory development in patients. Valid through July 2026.",
      image: `${process.env.PUBLIC_URL}/certificate1.jpg`,
      issuedBy: "Evergreen Certifications",
      validity: "07/17/2026",
    },
    {
      title: "Primitive Reflex Clinical Specialist (OTR/L)",
      description:
        "Special certification for licensed Occupational Therapists, emphasizing advanced techniques in reflex integration therapy. Recognized by Evergreen Certifications and valid through July 2026.",
      image: `${process.env.PUBLIC_URL}/certificate2.jpg`,
      issuedBy: "Evergreen Certifications",
      validity: "07/17/2026",
    },
  ];

  const openModal = (image) => {
    setModal(true);
    setModalImage(image);
  };

  const closeModal = () => {
    setModal(false);
    setModalImage(null);
  };

  const handleGetInTouchNavigation = () => {
    navigate('/GetInTouch');
  };

  return (
    <div className="certifications-container">
      <h1 className="certifications-title">Certifications</h1>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certification-image"
              onClick={() => openModal(cert.image)}
            />
            <div className="certification-description">
              <h2 onClick={() => openModal(cert.image)} className="clickable-title">
                {cert.title}
              </h2>
              <p>{cert.description}</p>
              <p>
                <strong>Issued By:</strong> {cert.issuedBy}
              </p>
              <p>
                <strong>Valid Through:</strong> {cert.validity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for certificate display */}
      {modal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Certificate" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Let's Connect Button */}
      <button
        className="connect-button"
        onClick={handleGetInTouchNavigation}
      >
        Let's Connect
      </button>
    </div>
  );
}

export default Certifications;
