import React from 'react';
import clsx from 'clsx';
import { BsBehance, BsDribbble, BsInstagram } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Color, fontColorClasses } from '@/types';

type Props = {
  direction?: 'col' | 'row';
  color?: Color;
  size?: 'sm' | 'md' | 'lg';
};

// animation variants
const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const SocialLinks = ({
  direction = 'col',
  color = 'primary',
  size = 'md',
}: Props) => {
  return (
    <motion.ul
      variants={list}
      initial="hidden"
      animate="visible"
      className={clsx(
        'flex gap-3 items-center justify-start',
        direction === 'col' && 'flex-col justify-center',
        size === 'md' && 'gap-4',
        size === 'lg' && 'gap-6'
      )}>
      {/* TODO: link to actual sites */}
      <motion.li variants={item}>
        <BsInstagram
          className={clsx(
            'w-7 h-7',
            size === 'lg' && 'w-10 h-10',
            size === 'sm' && 'w-6 h-6',
            fontColorClasses[color]
          )}
        />
      </motion.li>
      <motion.li variants={item}>
        <BsBehance
          className={clsx(
            'w-7 h-7',
            size === 'lg' && 'w-10 h-10',
            size === 'sm' && 'w-6 h-6',
            fontColorClasses[color]
          )}
        />
      </motion.li>
      <motion.li variants={item}>
        <BsDribbble
          className={clsx(
            'w-7 h-7',
            size === 'lg' && 'w-10 h-10',
            size === 'sm' && 'w-6 h-6',
            fontColorClasses[color]
          )}
        />
      </motion.li>
    </motion.ul>
  );
};

export default SocialLinks;
