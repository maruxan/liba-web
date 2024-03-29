import React from 'react';
import Image from 'next/image';
import { CgArrowLongRight } from 'react-icons/cg';
import { PageTitle, Subtitle } from '.';
import { motion } from 'framer-motion';
import bgImage from 'public/photography-bg-image.png';

const PhotographyView = () => {
  // TODO: work portfolio
  const handleSeeWork = () => {};

  return (
    <div className="flex flex-col justify-end items-end gap-24 h-full">
      <Image
        src={bgImage}
        placeholder="blur"
        alt="background image"
        className="absolute z-[-1] object-cover"
        fill
        priority
      />

      <motion.div animate={{ x: [100, 0], opacity: [0, 1] }}>
        <PageTitle>real life framing</PageTitle>
      </motion.div>
      <motion.div
        animate={{ x: [100, 0], opacity: [0, 1] }}
        className="self-end max-w-lg text-right flex flex-col gap-4 items-end">
        <Subtitle>
          share your view of the world through art direction for social media
        </Subtitle>
        <button
          className="flex gap-3 items-center text-4xl text-primary font-bold"
          onClick={handleSeeWork}>
          <span>see work</span>
          <CgArrowLongRight className="w-16 h-16" />
        </button>
      </motion.div>
    </div>
  );
};

export default PhotographyView;
