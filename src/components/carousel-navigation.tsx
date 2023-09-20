import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { ThemeContext, ThemeContextType } from '@/contexts';

const activeClassName =
  'relative before:block before:absolute before:z-[1] before:-inset-2 before:w-7 before:h-7 before:rounded-full before:border-4 before:border-primary';

// animation variants
const step = {
  selected: { scale: [1, 1.1, 1] },
  notSelected: { scale: 1 },
};

const CarouselNavigation = () => {
  const { theme, switchTheme, nextTheme, prevTheme } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <div className="flex flex-col justify-center items-center">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevTheme}>
        <BsFillArrowUpCircleFill className="text-primary w-7 h-7 my-6" />
      </motion.button>

      <motion.button
        variants={step}
        initial="notSelected"
        animate={theme === 'design' ? 'selected' : 'notSelected'}
        className={clsx(
          'w-3 h-3 rounded-full bg-primary -mb-1',
          theme === 'design' && activeClassName
        )}
        onClick={() => switchTheme('design')}
      />
      <div className="w-0.5 h-24 bg-primary" />
      <motion.button
        variants={step}
        initial="notSelected"
        animate={theme === 'development' ? 'selected' : 'notSelected'}
        className={clsx(
          'w-3 h-3 rounded-full bg-primary -mb-1 -mt-1',
          theme === 'development' && activeClassName
        )}
        onClick={() => switchTheme('development')}
      />
      <div className="w-0.5 h-24 bg-primary" />
      <motion.button
        variants={step}
        initial="notSelected"
        animate={theme === 'photography' ? 'selected' : 'notSelected'}
        className={clsx(
          'w-3 h-3 rounded-full bg-primary -mt-1',
          theme === 'photography' && activeClassName
        )}
        onClick={() => switchTheme('photography')}
      />

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextTheme}>
        <BsFillArrowDownCircleFill className="text-primary w-7 h-7 my-6" />
      </motion.button>
    </div>
  );
};

export default CarouselNavigation;
