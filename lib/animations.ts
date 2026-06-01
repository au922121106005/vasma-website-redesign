import { Variants } from 'framer-motion';

// Basic reveals
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
  },
};

// Container animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

// Floating and subtle animations
export const floatingVariants: Variants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Advanced scroll-linked animations
export const parallaxVariants = (offset = 0.5): Variants => ({
  initial: { y: 0 },
  animate: { y: 0 },
});

// Typography animations
export const heroHeadlineVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
      delay: 0.2,
    },
  },
};

// Hover and interaction states
export const buttonHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  tap: {
    scale: 0.98,
    y: 0,
  },
};

export const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Image reveal animations
export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Section transitions
export const sectionRevealVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Text stagger effect
export const textStaggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const charVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Expansion animations for panels
export const panelExpandVariants: Variants = {
  initial: { width: '33.33%', opacity: 0.8 },
  hover: {
    width: '50%',
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  compact: {
    width: '25%',
    opacity: 0.6,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

// Lazy load animations
export const lazyLoadVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};
