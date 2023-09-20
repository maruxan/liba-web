import React from 'react';
import Image from 'next/image';
import { CgArrowLongRight } from 'react-icons/cg';
import { PageTitle, Subtitle } from '.';
import { motion } from 'framer-motion';
import bgImage from 'public/development-bg-image.png';

const DevelopmentView = () => {
  // TODO: work portfolio
  const handleSeeWork = () => {};

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <Image
        src={bgImage}
        placeholder="blur"
        alt="background image"
        className="absolute z-[-1] object-cover"
        fill
        priority
      />

      <motion.div animate={{ y: [-50, 0], opacity: [0, 1] }}>
        <PageTitle>modern world solutions</PageTitle>
      </motion.div>

      <motion.div
        animate={{ y: [50, 0], opacity: [0, 1] }}
        className="flex flex-col gap-4 items-center">
        <Subtitle>we are passionate about problem solving</Subtitle>
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

export default DevelopmentView;
