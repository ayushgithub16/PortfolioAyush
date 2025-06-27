import React, { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";
import image1 from "./images/SPS_9096.JPG";
import image2 from "./images/SPS_9084.JPG";
import image3 from "./images/IMG-20250118-WA0005.jpg";
import image4 from "./images/IMG_20241211_183239_155.jpg";
import image5 from "./images/IMG_8650.JPG";
import image6 from "./images/FB_IMG_1736066323323.jpg";
import image7 from "./images/495082227_18304731451212359_9161816660457504488_n.jpg";
import image8 from "./images/495021938_18304731346212359_3379769880099742900_n.jpg";
import image9 from "./images/494620510_18304731394212359_8925975461416602146_n.jpg";
import image10 from "./images/491453243_18304731367212359_8975248060933127470_n.jpg";
import image11 from "./images/332300761_1605991043157634_2790303290002565846_n.jpg";
import image12 from "./images/294141760_127406806655216_1511272818158184376_n.jpg";
import image13 from "./images/294052552_127407289988501_9030592244527171100_n.jpg";
import image14 from "./images/7B8A0322.jpg";
import image15 from "./images/7B8A0307.jpg";
import image16 from "./images/7B8A0295.jpg";
import image17 from "./images/_MG_5659.JPG";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
];

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const slideIn = keyframes`
  from { transform: translateX(100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

const slideVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

// Motion-enabled styled components
const MotionCarouselTrack = motion(styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`);

const MotionCarouselSlide = motion(styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${(props) => {
    if (props.active) return "scale(1)";
    if (props.direction === "next") return "scale(0.95) translateX(-20px)";
    if (props.direction === "prev") return "scale(0.95) translateX(20px)";
    return "scale(0.9)";
  }};
  pointer-events: ${(props) => (props.active ? "auto" : "none")};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 28px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    user-select: none;
    pointer-events: none;
    transition: transform 0.3s ease;
    display: block;
    max-width: 100%;
    max-height: 100%;
  }

  &:hover img {
    transform: scale(1.02);
  }
`);

const ImageCarouselPage = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);
  const [imageError, setImageError] = useState(false);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("next");
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setAnimating(false);
      setDirection(null);
    }, 600);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setAnimating(false);
      setDirection(null);
    }, 600);
  };

  // Auto-play
  useEffect(() => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [current]);

  // Touch support
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prevSlide();
    if (delta < -50) nextSlide();
    touchStartX.current = null;
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageError(false);
  };

  return (
    <PageWrapper id="gallery">
      <h2 className="carousel-title">Images</h2>
      <CarouselWrapper>
        <ArrowButton left onClick={prevSlide} aria-label="Previous image">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </ArrowButton>
        <MotionCarouselTrack
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, idx) => (
            <MotionCarouselSlide
              key={img}
              variants={slideVariants}
              active={idx === current}
              animating={animating}
              direction={direction}
              style={{ zIndex: idx === current ? 2 : 1 }}
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
              {imageError && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textAlign: "center",
                    background: "rgba(0,0,0,0.7)",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <p>Image failed to load</p>
                  <p>Slide {idx + 1}</p>
                </div>
              )}
              <SlideOverlay>
                <SlideNumber>
                  {idx + 1} / {images.length}
                </SlideNumber>
              </SlideOverlay>
            </MotionCarouselSlide>
          ))}
        </MotionCarouselTrack>
        <ArrowButton onClick={nextSlide} aria-label="Next image">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </ArrowButton>
      </CarouselWrapper>
      <Dots>
        {images.map((_, idx) => (
          <Dot
            key={idx}
            active={idx === current}
            onClick={() => !animating && setCurrent(idx)}
          />
        ))}
      </Dots>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(ellipse at 70% 50%, #353535 60%, #232323 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 10px 30px 10px;

  .carousel-title {
    font-size: 3rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 50px;
    letter-spacing: -0.02em;
    text-align: center;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    animation: ${fadeIn} 1s ease-out;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 96vw;
  max-width: 900px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SlideOverlay = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SlideNumber = styled.span`
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

const Dots = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 40px;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${(props) =>
    props.active ? "#ffffff" : "rgba(255, 255, 255, 0.3)"};
  box-shadow: ${(props) =>
    props.active ? "0 0 20px rgba(255, 255, 255, 0.5)" : "none"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
    transform: scale(1.2);
  }

  ${(props) =>
    props.active &&
    css`
      animation: ${pulse} 2s infinite;
    `}
`;

export default ImageCarouselPage;
