import React from "react";
import styled from "styled-components";

const LeadershipEngagement = () => {
  const leadershipData = [
    {
      id: 1,
      title: "President – Lofa Pokhara",
      description:
        "Founded the club with 125+ members, managing a board of 9 members and a core team of 15 teams. Led digital finance sessions across 15 schools. Organized 8 seminars on entrepreneurship and finance. Impacted 1,600+ youth.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-people-fill"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "President – Hermann Gmeiner Child Club (SOS)",
      description:
        'Led a 700+ member club. Hosted a science quiz (8 teams) at SOS School. Organized "Mind Well" program for 250+ students. Managed six additional school events.',
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-award-fill"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "IT Officer – Leadership Forum Pokhara",
      description:
        "Supervised IT team and directed organizational marketing. Boosted club's online presence via social media. Excelled in graphic design and video editing.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-laptop"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Organizer – "Women in Nepal: Challenges & Potential"',
      description:
        "Hosted an event with 1,400 audience members. Oversaw technical and marketing operations. Partnered with Pokhara Municipality for venue and panel guests.",
      icon: (
        <svg
          viewBox="0 0 16 16"
          className="bi bi-calendar-event"
          fill="currentColor"
          height={40}
          width={40}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.195.75-.38 1.125-.561v6.394h.503zm1.188 0V6.354h.633A12.6 12.6 0 0 1 11.5 7.16v.695c-.375-.195-.75-.38-1.125-.561v6.394h-.742z" />
          <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
        </svg>
      ),
    },
  ];

  return (
    <StyledWrapper>
      <div className="leadership-container">
        <div className="section-header">
          <h2 className="section-title">Leadership & Community Engagement</h2>
          <div className="section-subtitle">
            Making a Difference Through Leadership
          </div>
        </div>

        <div className="cards-container">
          {leadershipData.map((item) => (
            <section key={item.id} id={`card${item.id}`} className="card">
              <div className="card__front">
                <div className="card__icon">{item.icon}</div>
                <p className="card__title">{item.title}</p>
              </div>
              <div className="card__content">
                <p className="card__description">{item.description}</p>
              </div>
            </section>
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
  padding: 80px 20px;

  .leadership-container {
    width: 100%;
    max-width: 1200px;
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
    color: #ffffff;
    margin-bottom: 16px;
    letter-spacing: -0.025em;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 100%;
    max-width: 800px;
  }

  section.card {
    position: relative;
    width: 100%;
    height: 280px;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px);
  }

  .card__front {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: 1;
    transform: rotateX(0deg);
  }

  .card:hover .card__front {
    opacity: 0;
    transform: rotateX(90deg);
  }

  .card__icon {
    margin-bottom: 20px;
  }

  .card__icon svg {
    fill: #ffffff;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 3px;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    background-color: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .card__content {
    color: #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 25px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.9);
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 1.3rem;
    color: #ffffff;
    font-weight: 700;
    line-height: 1.3;
    text-align: center;
  }

  .card__description {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
    text-align: left;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .leadership-container {
      padding: 60px 20px;
    }

    .section-title {
      font-size: clamp(2rem, 4vw, 3rem);
    }

    .cards-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 600px;
    }

    section.card {
      height: 260px;
    }

    .card__title {
      font-size: 1.2rem;
    }

    .card__description {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .cards-container {
      grid-template-columns: 1fr;
      gap: 25px;
      max-width: 400px;
    }

    section.card {
      height: 240px;
    }

    .card__content {
      padding: 20px;
    }

    .card__title {
      font-size: 1.1rem;
    }

    .card__description {
      font-size: 0.85rem;
    }
  }
`;

export default LeadershipEngagement;
