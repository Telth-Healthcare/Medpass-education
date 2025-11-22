export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const staggerWrapper = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const cardMotion = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const floatIcon = {
  initial: { y: 0 },
  animate: {
    y: -12,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};
