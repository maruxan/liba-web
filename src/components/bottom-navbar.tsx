import React, { useContext } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { ThemeContext, ThemeContextType } from '@/contexts';

// animation variants
const navItem = {
  popUp: (i: number) => ({
    y: [100, 0],
    opacity: [0, 1],
    transition: { delay: i * 0.2 },
  }),
};

const BottomNavbar = () => {
  const { theme, switchTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="py-6 px-12 flex items-center justify-center">
      <nav className="flex justify-center gap-12">
        <motion.div variants={navItem} animate="popUp" custom={0}>
          <button
            type="button"
            onClick={() => switchTheme('design')}
            className={clsx(
              'font-bold text-lg text-primary',
              theme === 'design' && 'border-b-primary border-b-2'
            )}>
            DESIGN
          </button>
        </motion.div>
        <motion.div variants={navItem} animate="popUp" custom={1}>
          <button
            type="button"
            onClick={() => switchTheme('development')}
            className={clsx(
              'font-bold text-lg text-primary',
              theme === 'development' && 'border-b-primary border-b-2'
            )}>
            DEVELOPMENT
          </button>
        </motion.div>
        <motion.div variants={navItem} animate="popUp" custom={2}>
          <button
            type="button"
            onClick={() => switchTheme('photography')}
            className={clsx(
              'font-bold text-lg text-primary',
              theme === 'photography' && 'border-b-primary border-b-2'
            )}>
            PHOTOGRAPHY
          </button>
        </motion.div>
      </nav>
    </div>
  );
};

export default BottomNavbar;
