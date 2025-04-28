export const buttonsAnimations = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
      delay: 0.3,
    },
  },
};

export const galleryAnimations = {
  contentHidden: {
    width: '0',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
  contentVisible: {
    width: '70%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  galleryClose: {
    width: '50%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  galleryOpen: {
    width: '100%',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.1,
    },
  },
};
