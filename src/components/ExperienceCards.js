import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// SVG icons for each milestone
const ResearchIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
    <line x1="11" y1="8" x2="11" y2="14" />
  </svg>
);
const EventsIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const InternationalIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20" />
  </svg>
);

// Apple-like animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
  50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
`;

const ExperienceCards = () => {
  const [activeMilestone, setActiveMilestone] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experienceData = [
    {
      id: 1,
      title: "Research & Development",
      role: "Research Coordinator – Government of Nepal, Machhapuchre Rural Municipality (MRM)",
      details: [
        "Held sessions for 80 underprivileged students",
        "Surveyed computer usage in education at MRM",
        "Drafted technology-friendly learning policies",
      ],
      icon: <ResearchIcon />,
    },
    {
      id: 2,
      title: "Events & Operations",
      role: "On-Ground Ops & Finance – The End Game, Komagane Park (Dec 31, 2024)",
      details: [
        "Managed operations and finances for a 10,000+ attendee New Year's Eve concert in Pokhara",
        "Coordinated with top artists like Sabin Rai & The Pharaoh, Purna Rai & Daju Bhai Haru, Dong, Firante, and more",
        "Oversaw budgeting, logistics, and real-time execution for a landmark city event",
      ],
      icon: <EventsIcon />,
    },
    {
      id: 3,
      title: "International Experience",
      role: "Delegate – United Nations Headquarters, New York",
      details: [
        "Represented Bagmati UNESCO Club at the 4th PrepCom Session for FfD4 and the 2025 ECOSOC Forum on Financing for Development Follow-up",
        "Engaged in high-level dialogues on sustainable financing and global development",
        "Networked with global leaders, youth delegates, and policy experts",
      ],
      icon: <InternationalIcon />,
    },
  ];

  const toggleMilestone = (id) => {
    setActiveMilestone(activeMilestone === id ? null : id);
  };

  return (
    <StyledWrapper>
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Achievements</h2>
          <div className="section-subtitle">Professional Journey Timeline</div>
        </div>

        <div className="timeline-container">
          {/* Enhanced timeline line with gradient */}
          <div className="timeline-line" />
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-milestone ${
                activeMilestone === item.id ? "active" : ""
              } ${isVisible ? "visible" : ""}`}
              onClick={() => toggleMilestone(item.id)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="milestone-dot">
                <div className="milestone-icon">{item.icon}</div>
                <div className="milestone-glow" />
              </div>
              <div className="milestone-content">
                <h3 className="milestone-title">{item.title}</h3>
                <div className="milestone-details">
                  <div className="role-title">{item.role}</div>
                  <ul className="details-list">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="rgba(0,0,0,0.03)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
    pointer-events: none;
  }

  .experience-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
    animation: ${fadeInUp} 1s ease-out;
  }

  .section-title {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 20px;
    letter-spacing: -0.03em;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .section-subtitle {
    font-size: 1.4rem;
    color: #6b7280;
    font-weight: 400;
    animation: ${slideInFromRight} 1s ease-out 0.3s both;
  }

  .timeline-container {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 100px 0 40px 0;
  }

  .timeline-line {
    position: absolute;
    top: 140px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(59, 130, 246, 0.6) 25%,
      rgba(59, 130, 246, 0.8) 50%,
      rgba(59, 130, 246, 0.6) 75%,
      rgba(59, 130, 246, 0.1) 100%
    );
    border-radius: 2px;
    z-index: 1;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
  }

  .timeline-milestone {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    flex: 1;
    max-width: 300px;
    opacity: 0;
    transform: translateY(50px) scale(0.9);

    &.visible {
      opacity: 1;
      transform: translateY(0) scale(1);
    }

    &:hover {
      transform: translateY(-10px) scale(1.02);
    }
  }

  .milestone-dot {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    border: 3px solid rgba(59, 130, 246, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);

    &:hover {
      transform: scale(1.1);
      border-color: rgba(59, 130, 246, 0.6);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
    }
  }

  .timeline-milestone.active .milestone-dot {
    background: rgba(59, 130, 246, 0.1);
    border-color: rgba(59, 130, 246, 0.8);
    transform: scale(1.15);
    animation: ${glow} 2s infinite;
  }

  .milestone-icon {
    font-size: 2rem;
    transition: transform 0.3s ease;
    z-index: 2;
    position: relative;
  }

  .timeline-milestone.active .milestone-icon {
    transform: scale(1.2);
  }

  .milestone-glow {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.3) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .timeline-milestone.active .milestone-glow {
    opacity: 1;
  }

  .milestone-content {
    text-align: center;
    width: 100%;
  }

  .milestone-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: #1f2937;
    margin: 0 0 20px 0;
    transition: all 0.3s ease;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .timeline-milestone.active .milestone-title {
    color: #1d4ed8;
    transform: scale(1.05);
  }

  .milestone-details {
    max-height: 0;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    opacity: 0;
    transform: translateY(20px);
    background: rgba(59, 130, 246, 0.05);
    border-radius: 20px;
    padding: 0 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  .timeline-milestone.active .milestone-details {
    max-height: 500px;
    opacity: 1;
    transform: translateY(0);
    padding: 25px 20px;
    margin-top: 15px;
  }

  .role-title {
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  .details-list {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  .details-list li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 10px;
    color: #4b5563;
    line-height: 1.6;
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #3b82f6;
      font-weight: bold;
      font-size: 1.2rem;
    }

    &:hover {
      color: #1f2937;
      transform: translateX(5px);
    }
  }

  .details-list li:last-child {
    margin-bottom: 0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .experience-container {
      padding: 60px 20px;
    }

    .section-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
    }

    .timeline-container {
      flex-direction: column;
      gap: 50px;
      padding: 60px 0 20px 0;
    }

    .timeline-line {
      display: none;
    }

    .timeline-milestone {
      max-width: 100%;
      flex-direction: row;
      text-align: left;
      gap: 25px;
    }

    .milestone-dot {
      width: 70px;
      height: 70px;
      margin-bottom: 0;
      flex-shrink: 0;
    }

    .milestone-icon {
      font-size: 1.5rem;
    }

    .milestone-content {
      text-align: left;
      flex: 1;
    }

    .milestone-title {
      font-size: 1.2rem;
      margin-bottom: 15px;
    }

    .role-title {
      font-size: 0.95rem;
    }

    .details-list li {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    .timeline-milestone {
      gap: 20px;
    }

    .milestone-dot {
      width: 60px;
      height: 60px;
    }

    .milestone-icon {
      font-size: 1.3rem;
    }

    .milestone-title {
      font-size: 1.1rem;
    }

    .role-title {
      font-size: 0.9rem;
    }

    .details-list li {
      font-size: 0.8rem;
      padding-left: 20px;
    }
  }
`;

export default ExperienceCards;
