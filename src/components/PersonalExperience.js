import React, { useState } from "react";
import styled from "styled-components";

const PersonalExperience = () => {
  const [showMore, setShowMore] = useState(false);

  const experienceData = {
    title: "Professional Experience",
    position: "Tech Intern – L.A & Associates, Chartered Accountants",
    duration: "Mar 2024 – Dec 2024 · Kathmandu, Nepal",
    achievements: [
      "Prepared detailed financial reports for the firm's top client",
      "Developed an online attendance system tailored to the firm's task-based workflow",
      "Launched the firm's official website: lacanepal.com",
    ],
    icon: (
      <svg
        viewBox="0 0 512 512"
        height="2.5em"
        xmlns="http://www.w3.org/2000/svg"
        fill="#1f2937"
      >
        <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v192c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm72 296c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" />
      </svg>
    ),
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <StyledWrapper id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">{experienceData.title}</h2>
          <div className="section-subtitle">My Work Journey</div>
        </div>

        <div className="content-wrapper-row">
          <div className={`experience-card${showMore ? " expanded" : ""}`}>
            <div className="experience-header">
              <div className="experience-icon">{experienceData.icon}</div>
              <div className="experience-info">
                <h3 className="position-title">{experienceData.position}</h3>
                <p className="position-duration">{experienceData.duration}</p>
              </div>
            </div>
            <button
              className={`more-button${showMore ? " active" : ""}`}
              onClick={handleMoreClick}
            >
              {showMore ? "Show Less" : "More"}
            </button>
          </div>
          {showMore && (
            <div className="experience-achievements achievements-panel slide-in">
              <div className="achievements-title">Key Achievements</div>
              <ul className="achievements-list">
                {experienceData.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;

  .experience-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
    letter-spacing: -0.025em;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: #6b7280;
    font-weight: 400;
  }

  .content-wrapper-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    max-width: 1200px;
    gap: 40px;
    position: relative;
  }

  .experience-card {
    background: #ffffff;
    border: 2px solid #e5e7eb;
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    min-width: 320px;
    max-width: 500px;
    flex: 1 1 350px;
    z-index: 2;
  }

  .experience-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
  }

  .experience-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: #d1d5db;
  }

  .experience-header {
    display: flex;
    align-items: center;
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f3f4f6;
  }

  .experience-icon {
    margin-right: 24px;
    background: linear-gradient(135deg, #f8fafc, #e2e8f0);
    padding: 20px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .experience-card:hover .experience-icon {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .experience-info {
    flex: 1;
  }

  .position-title {
    color: #1f2937;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .position-duration {
    color: #6b7280;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  .experience-achievements {
    margin-top: 20px;
  }

  .achievements-title {
    color: #1f2937;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: -0.01em;
  }

  .achievements-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #4b5563;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .achievements-list li {
    padding: 12px 16px;
    background: #f9fafb;
    border-radius: 10px;
    border-left: 4px solid #3b82f6;
    transition: all 0.3s ease;
    position: relative;
  }

  .achievements-list li:hover {
    background: #f3f4f6;
    border-left-color: #1d4ed8;
    transform: translateX(6px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .achievements-list li::before {
    content: "✓";
    color: #3b82f6;
    font-weight: bold;
    margin-right: 10px;
    font-size: 1em;
  }

  .image-space {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
  }

  .image-placeholder {
    background: #f3f4f6;
    border: 2px dashed #d1d5db;
    border-radius: 20px;
    padding: 60px 40px;
    text-align: center;
    width: 100%;
    max-width: 400px;
    transition: all 0.3s ease;
  }

  .image-placeholder:hover {
    background: #e5e7eb;
    border-color: #9ca3af;
  }

  .image-placeholder span {
    font-size: 1.1rem;
    color: #6b7280;
    font-weight: 500;
  }

  .sidebar-section {
    flex-shrink: 0;
    width: 350px;
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .content-wrapper.expanded {
    flex-direction: row-reverse;
  }

  .slide-left {
    animation: slideInLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .more-button-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .more-button {
    display: block;
    margin: 0 auto 0 0;
    margin-top: 12px;
    padding: 10px 24px;
    background: linear-gradient(90deg, #3b82f6, #8b5cf6);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);
    transition: background 0.3s, box-shadow 0.3s;
  }

  .more-button.active,
  .more-button:hover {
    background: linear-gradient(90deg, #2563eb, #7c3aed);
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.12);
  }

  .fade-in {
    animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .experience-card.expanded {
    box-shadow: 0 24px 48px rgba(59, 130, 246, 0.15),
      0 1.5px 6px rgba(0, 0, 0, 0.04);
    border-color: #3b82f6;
    transform: scale(1.03) translateY(-10px);
    background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  }

  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .achievements-panel {
    background: #f9fafb;
    border-radius: 20px;
    border: 2px solid #e5e7eb;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.08);
    padding: 32px 28px;
    min-width: 320px;
    max-width: 400px;
    flex: 1 1 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 0;
    opacity: 1;
    z-index: 1;
    animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .slide-in {
    animation: slideInRight 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(60px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .content-wrapper {
      gap: 40px;
    }

    .sidebar-section {
      width: 320px;
    }
  }

  @media (max-width: 900px) {
    .content-wrapper-row {
      flex-direction: column;
      gap: 24px;
      align-items: center;
    }
    .achievements-panel {
      min-width: 0;
      max-width: 100%;
      width: 100%;
      margin-left: 0;
    }
  }

  @media (max-width: 768px) {
    .experience-container {
      padding: 60px 20px;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .content-wrapper {
      gap: 30px;
    }

    .experience-card {
      padding: 32px 24px;
    }

    .experience-header {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }

    .experience-icon {
      margin-right: 0;
      margin-bottom: 16px;
    }

    .position-title {
      font-size: 1.5rem;
    }

    .achievements-list {
      font-size: 1rem;
    }

    .more-button {
      padding: 10px 25px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .experience-card {
      padding: 24px 20px;
    }

    .position-title {
      font-size: 1.3rem;
    }

    .achievements-list li {
      padding: 12px 16px;
    }

    .more-button {
      padding: 8px 20px;
      font-size: 0.85rem;
    }
  }
`;

export default PersonalExperience;
