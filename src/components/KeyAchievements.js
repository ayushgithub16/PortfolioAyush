import React from "react";
import styled from "styled-components";

const KeyAchievements = () => {
  const keyAchievements = [
    {
      id: 1,
      title: "UN Delegate",
      description: "Represented at United Nations Headquarters, New York",
      icon: "🏛️",
      category: "International",
    },
    {
      id: 2,
      title: "4.0 GPA",
      description: "Current GPA at Caldwell University",
      icon: "🎓",
      category: "Academic",
    },
    {
      id: 3,
      title: "125+ Members",
      description: "Founded and led Lofa Pokhara club",
      icon: "👥",
      category: "Leadership",
    },
    {
      id: 4,
      title: "10,000+ Attendees",
      description: "Managed New Year's Eve concert operations",
      icon: "🎪",
      category: "Events",
    },
    {
      id: 5,
      title: "1,600+ Youth Impact",
      description: "Led digital finance sessions across schools",
      icon: "🌟",
      category: "Community",
    },
    {
      id: 6,
      title: "Stanford Course",
      description: "Code in Place 2025 completion",
      icon: "💻",
      category: "Education",
    },
  ];

  return (
    <StyledWrapper>
      <div className="achievements-sidebar">
        <h3 className="sidebar-title">Key Achievements</h3>
        <div className="achievements-list">
          {keyAchievements.map((achievement) => (
            <div key={achievement.id} className="achievement-item">
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <span className="achievement-category">
                  {achievement.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .achievements-sidebar {
    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    width: 100%;
    max-width: 350px;
    position: sticky;
    top: 100px;
  }

  .sidebar-title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 25px;
    text-align: center;
    letter-spacing: -0.025em;
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 15px;
  }

  .achievements-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .achievement-item {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .achievement-item:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  .achievement-icon {
    font-size: 2rem;
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(5px);
  }

  .achievement-content {
    flex: 1;
  }

  .achievement-title {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 600;
    margin: 0 0 5px 0;
    line-height: 1.3;
  }

  .achievement-description {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.85rem;
    margin: 0 0 8px 0;
    line-height: 1.4;
  }

  .achievement-category {
    display: inline-block;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Responsive Design */
  @media (max-width: 1200px) {
    .achievements-sidebar {
      max-width: 320px;
      padding: 25px;
    }
  }

  @media (max-width: 900px) {
    .achievements-sidebar {
      max-width: 100%;
      position: static;
      margin: 20px 0;
    }
  }

  @media (max-width: 768px) {
    .achievements-sidebar {
      padding: 20px;
    }

    .sidebar-title {
      font-size: 1.3rem;
      margin-bottom: 20px;
    }

    .achievement-item {
      padding: 12px;
      gap: 12px;
    }

    .achievement-icon {
      font-size: 1.5rem;
      width: 40px;
      height: 40px;
    }

    .achievement-title {
      font-size: 0.9rem;
    }

    .achievement-description {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    .achievements-sidebar {
      padding: 15px;
    }

    .achievements-list {
      gap: 15px;
    }

    .achievement-item {
      padding: 10px;
      gap: 10px;
    }

    .achievement-icon {
      font-size: 1.3rem;
      width: 35px;
      height: 35px;
    }
  }
`;

export default KeyAchievements;
