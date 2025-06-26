import React from "react";
import styled from "styled-components";

const ExperienceCard = () => {
  return (
    <StyledWrapper>
      <h2 className="section-title">Experience & Achievements</h2>
      <div className="cards">
        <div className="card red">
          <div className="card-content">
            <p className="tip">Research & Development</p>
            <div className="details">
              <h4>
                Research Coordinator – Government of Nepal, Machhapuchre Rural
                Municipality (MRM)
              </h4>
              <ul>
                <li>Held sessions for 80 underprivileged students</li>
                <li>Surveyed computer usage in education at MRM</li>
                <li>Drafted technology-friendly learning policies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card blue">
          <div className="card-content">
            <p className="tip">Events & Operations</p>
            <div className="details">
              <h4>
                On-Ground Ops & Finance – The End Game, Komagane Park (Dec 31,
                2024)
              </h4>
              <ul>
                <li>
                  Managed operations and finances for a 10,000+ attendee New
                  Year's Eve concert in Pokhara
                </li>
                <li>
                  Coordinated with top artists like Sabin Rai & The Pharaoh,
                  Purna Rai & Daju Bhai Haru, Dong, Firante, and more
                </li>
                <li>
                  Oversaw budgeting, logistics, and real-time execution for a
                  landmark city event
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card green">
          <div className="card-content">
            <p className="tip">International Experience</p>
            <div className="details">
              <h4>Delegate – United Nations Headquarters, New York</h4>
              <ul>
                <li>
                  Represented Bagmati UNESCO Club at the 4th PrepCom Session for
                  FfD4 and the 2025 ECOSOC Forum on Financing for Development
                  Follow-up
                </li>
                <li>
                  Engaged in high-level dialogues on sustainable financing and
                  global development
                </li>
                <li>
                  Networked with global leaders, youth delegates, and policy
                  experts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;

  .section-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 80px;
    letter-spacing: -0.025em;
  }

  .cards {
    display: flex;
    flex-direction: row;
    gap: 15px;
    justify-content: center;
    align-items: center;
  }

  .cards .red {
    background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
    border: none;
  }

  .cards .blue {
    background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
    border: none;
  }

  .cards .green {
    background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
    border: none;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 300px;
    width: 300px;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
  }

  .cards .card p.tip {
    font-size: 1.4em;
    font-weight: 700;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    transition: all 0.4s ease;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    color: white;
  }

  .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease;
    backdrop-filter: blur(5px);
  }

  .details h4 {
    font-size: 0.9em;
    font-weight: 600;
    margin: 0 0 15px 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.3;
    text-align: center;
    color: white;
  }

  .details ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
  }

  .details li {
    font-size: 0.75em;
    margin-bottom: 8px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.4;
    position: relative;
    padding-left: 15px;
    color: white;
  }

  .details li:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #fff;
    font-weight: bold;
  }

  .cards .card:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  .cards .card:hover .details {
    opacity: 1;
    transform: translateY(0);
  }

  .cards .card:hover p.tip {
    opacity: 0;
    transform: translateY(-20px);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(3px);
    transform: scale(0.95);
    opacity: 0.7;
  }
`;

export default ExperienceCard;
