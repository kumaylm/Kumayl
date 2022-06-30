import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import anime from "animejs";

const LoaderVariant = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 1.7, duration: 1 },
  },
};

const LoadingScreen = () => {
  useEffect(() => {
    anime({
      targets: ".tri path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInSine",
      duration: 1700,
      delay: function (el, i) {
        return i * 100;
      },
      direction: "alternate",
      loop: false,
    });
  }, []);

  return (
    <svg
      className="tri absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
      width="91"
      height="100"
      viewBox="0 0 71 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial="hide"
        animate="show"
        variants={LoaderVariant}
        d="M30.4318 49.4545L30.3636 44.4773H31.1818L42.6364 32.8182H47.6136L35.4091 45.1591H35.0682L30.4318 49.4545ZM26.6818 59V24.0909H30.7045V59H26.6818ZM43.3182 59L33.0909 46.0455L35.9545 43.25L48.4318 59H43.3182Z"
        fill="#23CBE0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 25.275L35.3038 2L36.0175 2.88667L2.71365 26.1616L2 25.275Z"
        stroke="#23CBE0"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.4367 81.9944L68.2454 58.5126L68.97 59.3916L36.1613 82.8733L35.4367 81.9944Z"
        stroke="#23CBE0"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.3038 2L68.6077 25.275L67.894 26.1616L34.5902 2.88667L35.3038 2Z"
        stroke="#23CBE0"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.18942 58.5249L36.4933 81.7999L35.7796 82.6866L2.47577 59.4116L3.18942 58.5249Z"
        stroke="#23CBE0"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 60L2 25H3L3 60H2Z"
        stroke="#23CBE0"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.3337 59.6331L67.5029 25.2751L68.6923 25.2802L68.5231 59.6382L67.3337 59.6331Z"
        stroke="#23CBE0"
        strokeWidth="2"
      />
    </svg>
  );
};

export default LoadingScreen;
