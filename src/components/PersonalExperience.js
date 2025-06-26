import React from "react";
import styled from "styled-components";

const PersonalExperience = () => {
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

  return (
    <StyledWrapper>
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">{experienceData.title}</h2>
          <div className="section-subtitle">My Work Journey</div>
        </div>

        <div className="content-wrapper">
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">{experienceData.icon}</div>
              <div className="experience-info">
                <h3 className="position-title">{experienceData.position}</h3>
                <p className="position-duration">{experienceData.duration}</p>
              </div>
            </div>

            <div className="experience-achievements">
              <h4 className="achievements-title">Key Achievements:</h4>
              <ul className="achievements-list">
                {experienceData.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="image-space">
            <div className="image-placeholder">
              <span>Add your image here</span>
            </div>
          </div>
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

  .content-wrapper {
    display: flex;
    align-items: flex-start;
    gap: 60px;
    width: 100%;
    max-width: 1200px;
  }

  .experience-card {
    background: #ffffff;
    border: 2px solid #e5e7eb;
    border-radius: 20px;
    padding: 40px;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
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

  /* Responsive Design */
  @media (max-width: 768px) {
    .experience-container {
      padding: 60px 20px;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .content-wrapper {
      flex-direction: column;
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

    .image-space {
      margin-top: 40px;
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

    .image-space {
      margin-top: 30px;
    }
  }
`;

export default PersonalExperience;
