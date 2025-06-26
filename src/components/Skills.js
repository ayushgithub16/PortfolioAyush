import React from "react";
import styled from "styled-components";

const skillsData = [
  {
    title: "Technical Skills",
    items: [
      "Web Development: Website design and deployment",
      "Video Editing & Graphic Design: Adobe Premiere Pro, Photoshop (or similar tools)",
      "Software: Microsoft Office Suite (Excel, Word, PowerPoint)",
    ],
    icon: (
      <svg
        viewBox="0 0 640 512"
        height="1.8em"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
      </svg>
    ),
  },
  {
    title: "Leadership & Management",
    items: [
      "Team Leadership & Board Management",
      "Event Planning & Coordination (large-scale events with 10,000+ attendees)",
      "Project Management & Financial Reporting",
      "Community Outreach & Educational Program Development",
    ],
    icon: (
      <svg
        viewBox="0 0 576 512"
        height="1.8em"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
      </svg>
    ),
  },
  {
    title: "Communication & Interpersonal",
    items: [
      "Public Speaking & Workshop Facilitation",
      "Cross-cultural Communication",
      "Networking with Stakeholders & Partners",
    ],
    icon: (
      <svg
        viewBox="0 0 496 512"
        height="1.8em"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
      </svg>
    ),
  },
];

const Skills = () => {
  return (
    <StyledWrapper>
      <div className="skills-section">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-cards">
          {skillsData.map((group, idx) => (
            <div
              className="glass"
              key={group.title}
              style={{ "--r": `${(idx - 1) * 15}` }}
            >
              <div className="icon">{group.icon}</div>
              <div className="group-title">{group.title}</div>
              <ul className="skills-list">
                {group.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
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
  background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;

  .skills-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills-title {
    color: #fff;
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 60px;
    margin-top: -10px;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 8px #0008;
  }

  .skills-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }

  .glass {
    position: relative;
    width: 320px;
    min-height: 260px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px 24px 24px;
    border-radius: 18px;
    margin: 0 -20px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r, 0) * 1deg));
    transition: 0.5s;
    z-index: 1;
    overflow: hidden;
  }

  .skills-cards:hover .glass {
    transform: rotate(0deg) scale(1.04);
    margin: 0 10px;
    z-index: 2;
  }

  .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  .icon {
    margin-bottom: 18px;
    color: #fff;
    filter: drop-shadow(0 2px 8px #0008);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .group-title {
    color: #fff;
    font-size: 0.9375rem;
    font-weight: 600;
    margin-bottom: 16px;
    letter-spacing: 0.01em;
    text-align: center;
  }

  .skills-list {
    list-style: none;
    padding: 0;
    margin: 0;
    color: #e5e7eb;
    font-size: 0.78125rem;
    font-weight: 400;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .skills-list li::before {
    content: "•";
    color: #fff;
    margin-right: 8px;
    font-size: 0.9375em;
    vertical-align: middle;
  }

  @media (max-width: 900px) {
    .skills-cards {
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
    .glass {
      margin: 0;
      width: 90vw;
      max-width: 400px;
    }
  }
`;

export default Skills;
