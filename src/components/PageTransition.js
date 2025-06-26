import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1], // Apple-like cubic-bezier
};

const variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -20,
    transition,
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
    style={{ minHeight: "100vh" }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
