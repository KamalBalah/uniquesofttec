"use client";

import type React from "react";

import { motion } from "motion/react";

// const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i: number) => {
//     const delay = i * 0.3;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//         repeat: Number.POSITIVE_INFINITY,
//         repeatType: "reverse",
//         repeatDelay: 0.5,
//       },
//     };
//   },
// };

const draw = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.5,
        type: "spring",
        duration: 1.5,
        bounce: 0,
      },
      opacity: {
        delay: i * 0.5,
        duration: 0.01,
      },
      // ✅ Move repeat config here if needed — at the top level of transition
      repeat: Infinity,
      repeatType: "loop" as const, // ✅ Ensure the value is a valid string literal
      repeatDelay: 2,
    },
  }),
};

export function AnimatedBackground() {
  return (
    <div className="animated-background">
      <motion.svg
        className="background-animation"
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        initial="hidden"
        animate="visible"
      >
        {/* Grid 1 - Top Left */}
        <motion.circle
          cx="100"
          cy="100"
          r="20"
          stroke="#ff0088"
          variants={draw}
          custom={1}
          style={shape}
        />
        <motion.circle
          cx="150"
          cy="150"
          r="15"
          stroke="#1e75f7"
          variants={draw}
          custom={2.1}
          style={shape}
        />
        <motion.rect
          width="30"
          height="30"
          x="200"
          y="100"
          rx="5"
          stroke="#8df0cc"
          variants={draw}
          custom={1.3}
          style={shape}
        />
        <motion.line
          x1="250"
          y1="80"
          x2="280"
          y2="120"
          stroke="#9911ff"
          variants={draw}
          custom={1.7}
          style={shape}
        />
        <motion.line
          x1="250"
          y1="120"
          x2="280"
          y2="80"
          stroke="#9911ff"
          variants={draw}
          custom={1.9}
          style={shape}
        />

        {/* Grid 2 - Top Right */}
        <motion.circle
          cx="900"
          cy="100"
          r="25"
          stroke="#8df0cc"
          variants={draw}
          custom={2.2}
          style={shape}
        />
        <motion.rect
          width="40"
          height="40"
          x="950"
          y="150"
          rx="8"
          stroke="#ff0088"
          variants={draw}
          custom={1.5}
          style={shape}
        />
        <motion.line
          x1="1000"
          y1="80"
          x2="1040"
          y2="120"
          stroke="#1e75f7"
          variants={draw}
          custom={2.3}
          style={shape}
        />
        <motion.line
          x1="1000"
          y1="120"
          x2="1040"
          y2="80"
          stroke="#1e75f7"
          variants={draw}
          custom={2.5}
          style={shape}
        />
        <motion.circle
          cx="1100"
          cy="150"
          r="18"
          stroke="#dd00ee"
          variants={draw}
          custom={1.8}
          style={shape}
        />

        {/* Grid 3 - Middle Left */}
        <motion.rect
          width="35"
          height="35"
          x="100"
          y="350"
          rx="6"
          stroke="#9911ff"
          variants={draw}
          custom={3.1}
          style={shape}
        />
        <motion.circle
          cx="180"
          cy="380"
          r="22"
          stroke="#0cdcf7"
          variants={draw}
          custom={2.7}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="330"
          x2="260"
          y2="370"
          stroke="#ff0088"
          variants={draw}
          custom={3.3}
          style={shape}
        />
        <motion.line
          x1="220"
          y1="370"
          x2="260"
          y2="330"
          stroke="#ff0088"
          variants={draw}
          custom={3.5}
          style={shape}
        />
        <motion.circle
          cx="300"
          cy="350"
          r="15"
          stroke="#8df0cc"
          variants={draw}
          custom={2.9}
          style={shape}
        />

        {/* Grid 4 - Middle Right */}
        <motion.circle
          cx="900"
          cy="380"
          r="20"
          stroke="#dd00ee"
          variants={draw}
          custom={3.2}
          style={shape}
        />
        <motion.rect
          width="30"
          height="30"
          x="950"
          y="330"
          rx="5"
          stroke="#0cdcf7"
          variants={draw}
          custom={2.6}
          style={shape}
        />
        <motion.line
          x1="1000"
          y1="350"
          x2="1040"
          y2="390"
          stroke="#8df0cc"
          variants={draw}
          custom={3.4}
          style={shape}
        />
        <motion.line
          x1="1000"
          y1="390"
          x2="1040"
          y2="350"
          stroke="#8df0cc"
          variants={draw}
          custom={3.6}
          style={shape}
        />
        <motion.circle
          cx="1100"
          cy="330"
          r="18"
          stroke="#ff0088"
          variants={draw}
          custom={2.8}
          style={shape}
        />

        {/* Grid 5 - Bottom Left */}
        <motion.circle
          cx="150"
          cy="600"
          r="25"
          stroke="#1e75f7"
          variants={draw}
          custom={4.1}
          style={shape}
        />
        <motion.rect
          width="35"
          height="35"
          x="200"
          y="650"
          rx="7"
          stroke="#dd00ee"
          variants={draw}
          custom={3.7}
          style={shape}
        />
        <motion.line
          x1="250"
          y1="600"
          x2="290"
          y2="640"
          stroke="#0cdcf7"
          variants={draw}
          custom={4.3}
          style={shape}
        />
        <motion.line
          x1="250"
          y1="640"
          x2="290"
          y2="600"
          stroke="#0cdcf7"
          variants={draw}
          custom={4.5}
          style={shape}
        />
        <motion.circle
          cx="100"
          cy="650"
          r="15"
          stroke="#9911ff"
          variants={draw}
          custom={3.9}
          style={shape}
        />

        {/* Grid 6 - Bottom Right */}
        <motion.rect
          width="40"
          height="40"
          x="900"
          y="600"
          rx="8"
          stroke="#9911ff"
          variants={draw}
          custom={4.2}
          style={shape}
        />
        <motion.circle
          cx="980"
          cy="650"
          r="20"
          stroke="#8df0cc"
          variants={draw}
          custom={3.8}
          style={shape}
        />
        <motion.line
          x1="1020"
          y1="600"
          x2="1060"
          y2="640"
          stroke="#ff0088"
          variants={draw}
          custom={4.4}
          style={shape}
        />
        <motion.line
          x1="1020"
          y1="640"
          x2="1060"
          y2="600"
          stroke="#ff0088"
          variants={draw}
          custom={4.6}
          style={shape}
        />
        <motion.circle
          cx="1100"
          cy="600"
          r="18"
          stroke="#1e75f7"
          variants={draw}
          custom={4}
          style={shape}
        />

        {/* Additional scattered shapes */}
        <motion.circle
          cx="500"
          cy="100"
          r="15"
          stroke="#9911ff"
          variants={draw}
          custom={5.1}
          style={shape}
        />
        <motion.rect
          width="25"
          height="25"
          x="600"
          y="150"
          rx="5"
          stroke="#0cdcf7"
          variants={draw}
          custom={4.7}
          style={shape}
        />
        <motion.circle
          cx="500"
          cy="400"
          r="20"
          stroke="#ff0088"
          variants={draw}
          custom={5.3}
          style={shape}
        />
        <motion.rect
          width="30"
          height="30"
          x="600"
          y="450"
          rx="6"
          stroke="#8df0cc"
          variants={draw}
          custom={4.9}
          style={shape}
        />
        <motion.circle
          cx="500"
          cy="700"
          r="18"
          stroke="#1e75f7"
          variants={draw}
          custom={5.2}
          style={shape}
        />
        <motion.rect
          width="35"
          height="35"
          x="600"
          y="650"
          rx="7"
          stroke="#dd00ee"
          variants={draw}
          custom={4.8}
          style={shape}
        />

        {/* Triangles */}
        <motion.path
          d="M400 200 L430 250 L370 250 Z"
          stroke="#0cdcf7"
          variants={draw}
          custom={5.4}
          style={shape}
        />
        <motion.path
          d="M700 300 L730 350 L670 350 Z"
          stroke="#dd00ee"
          variants={draw}
          custom={5.6}
          style={shape}
        />
        <motion.path
          d="M400 500 L430 550 L370 550 Z"
          stroke="#8df0cc"
          variants={draw}
          custom={5.5}
          style={shape}
        />
        <motion.path
          d="M700 600 L730 650 L670 650 Z"
          stroke="#ff0088"
          variants={draw}
          custom={5.7}
          style={shape}
        />
      </motion.svg>
    </div>
  );
}

/**
 * ==============   Styles   ================
 */

const shape: React.CSSProperties = {
  strokeWidth: 2,
  strokeLinecap: "round",
  fill: "transparent",
};
