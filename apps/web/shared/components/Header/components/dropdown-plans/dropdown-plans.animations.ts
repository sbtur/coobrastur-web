export const buttonVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
};

export const dropdownVariants = {
  hidden: {
    scaleY: 0,
    height: 0,
    transformOrigin: 'top',
    transition: {
      height: { duration: 0.4, delay: 0.1 },
      scaleY: { duration: 0.4, delay: 0.1 },
    },
  },
  visible: {
    scaleY: 1,
    height: 'auto',
    transformOrigin: 'top',
    transition: {
      height: { duration: 0.4 },
      scaleY: { duration: 0.4 },
    },
  },
};

export const contentVariants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.5,
    },
  },
};
