import React from "react";
import styled from "styled-components";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Caldwell University",
      degree: "Bachelor of Science in Computer Science, Economics Major",
      period: "Expected Graduation: December 2029",
      gpa: "Current GPA: 4.0 / 4.0",
      status: "In Progress",
      type: "university",
      year: "2029",
    },
    {
      id: 2,
      institution: "Stanford University",
      degree: "Learner: Code in Place 2025",
      period: "2025",
      gpa: "Online Course",
      status: "Completed",
      type: "course",
      year: "2025",
    },
    {
      id: 3,
      institution: "SOS Hermann Gmeiner Secondary School",
      degree: "High School Diploma, Science",
      period: "2021 – 2023",
      gpa: "GPA: 3.64",
      status: "Completed",
      type: "high-school",
      year: "2023",
    },
    {
      id: 4,
      institution: "KEF Secondary School, Bagar, Kaski",
      degree: "Completed Grade 10",
      period: "2012 – 2020",
      gpa: "Graduated with 4.0 GPA, Academic Excellence Award",
      status: "Completed",
      type: "secondary",
      year: "2020",
    },
  ];

  return (
    <StyledWrapper>
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-subtitle">My Academic Journey</div>
        </div>

        <div className="stepper-box">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`stepper-step ${
                item.status === "Completed"
                  ? "stepper-completed"
                  : "stepper-active"
              }`}
            >
              <div className="stepper-circle">
                {item.status === "Completed" ? (
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-check-lg"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                ) : (
                  <span className="pulse-number">{index + 1}</span>
                )}
              </div>
              {index < educationData.length - 1 && (
                <div className="stepper-line" />
              )}
              <div className="stepper-content">
                <div className="stepper-title">{item.institution}</div>
                <div className="stepper-degree">{item.degree}</div>
                <div className="stepper-status">{item.status}</div>
                <div className="stepper-period">{item.period}</div>
                <div className="stepper-gpa">{item.gpa}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .education-container {
    background: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
    animation: fadeInDown 1s ease-out;
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    color: #111827;
    margin-bottom: 10px;
    letter-spacing: -0.025em;
    animation: slideInFromLeft 1s ease-out 0.2s both;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: #6b7280;
    font-weight: 400;
    animation: slideInFromRight 1s ease-out 0.4s both;
  }

  .stepper-box {
    background-color: #ffffff;
    border-radius: 16px;
    padding: 40px;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
    animation: fadeInUp 1s ease-out 0.6s both;
    transition: all 0.3s ease;
  }

  .stepper-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  .stepper-step {
    display: flex;
    margin-bottom: 40px;
    position: relative;
    opacity: 0;
    transform: translateY(50px);
    animation: slideInUp 0.8s ease forwards;
    transition: all 0.3s ease;
  }

  .stepper-step:hover {
    transform: translateX(10px);
  }

  .stepper-step:nth-child(1) {
    animation-delay: 0.8s;
  }
  .stepper-step:nth-child(2) {
    animation-delay: 1s;
  }
  .stepper-step:nth-child(3) {
    animation-delay: 1.2s;
  }

  .stepper-step:last-child {
    margin-bottom: 0;
  }

  .stepper-line {
    position: absolute;
    left: 19px;
    top: 40px;
    bottom: -40px;
    width: 2px;
    background: linear-gradient(to bottom, #1f2937, #6b7280);
    z-index: 1;
    animation: growLine 1s ease-out 1.5s both;
  }

  .stepper-step:last-child .stepper-line {
    display: none;
  }

  .stepper-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    z-index: 2;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    animation: bounceIn 0.6s ease-out 1.8s both;
  }

  .stepper-circle:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(31, 41, 55, 0.4);
  }

  .stepper-completed .stepper-circle {
    background: #1f2937;
    color: white;
    box-shadow: 0 4px 12px rgba(31, 41, 55, 0.3);
  }

  .stepper-active .stepper-circle {
    border: 2px solid #1f2937;
    color: #1f2937;
    background: white;
    box-shadow: 0 4px 12px rgba(31, 41, 55, 0.2);
  }

  .pulse-number {
    animation: pulse 2s infinite;
  }

  .stepper-content {
    flex: 1;
    animation: fadeInLeft 0.8s ease-out 2s both;
  }

  .stepper-title {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 8px;
    color: #111827;
    line-height: 1.3;
    letter-spacing: -0.025em;
    transition: color 0.3s ease;
  }

  .stepper-step:hover .stepper-title {
    color: #1f2937;
  }

  .stepper-degree {
    font-size: 1rem;
    color: #4b5563;
    margin-bottom: 12px;
    line-height: 1.5;
    font-weight: 500;
    transition: color 0.3s ease;
  }

  .stepper-step:hover .stepper-degree {
    color: #374151;
  }

  .stepper-status {
    font-size: 13px;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    animation: slideInRight 0.6s ease-out 2.2s both;
  }

  .stepper-completed .stepper-status {
    background-color: #dcfce7;
    color: #166534;
  }

  .stepper-active .stepper-status {
    background-color: #dbeafe;
    color: #1d4ed8;
  }

  .stepper-step:hover .stepper-status {
    transform: scale(1.05);
  }

  .stepper-period {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 6px;
    font-weight: 500;
    animation: fadeIn 0.6s ease-out 2.4s both;
  }

  .stepper-gpa {
    font-size: 14px;
    color: #059669;
    font-weight: 600;
    background: rgba(5, 150, 105, 0.1);
    padding: 6px 12px;
    border-radius: 8px;
    display: inline-block;
    animation: slideInUp 0.6s ease-out 2.6s both;
    transition: all 0.3s ease;
  }

  .stepper-step:hover .stepper-gpa {
    background: rgba(5, 150, 105, 0.15);
    transform: translateY(-2px);
  }

  /* Animation Keyframes */
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
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

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes growLine {
    from {
      height: 0;
    }
    to {
      height: calc(100% + 40px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .education-container {
      padding: 60px 20px;
    }

    .section-title {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
    }

    .stepper-box {
      padding: 30px 20px;
    }

    .stepper-title {
      font-size: 1.1rem;
    }

    .stepper-degree {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 2rem;
    }

    .stepper-box {
      padding: 25px 15px;
    }

    .stepper-step {
      margin-bottom: 30px;
    }
  }
`;

export default Education;
