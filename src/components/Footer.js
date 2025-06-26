import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© {new Date().getFullYear()} Ayush Adhikari. All rights reserved.</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
  color: #1f2937;
  padding: 32px 20px 24px 20px;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  font-size: 1rem;
  font-family: "Poppins", "Segoe UI", Arial, sans-serif;
  margin-top: auto;

  p {
    margin: 0;
    opacity: 0.8;
    letter-spacing: 0.01em;
  }
`;

export default Footer;
