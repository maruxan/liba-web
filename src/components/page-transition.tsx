import React from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence, Variants } from "framer-motion";

type Props = {
  children: JSX.Element;
};

/*
 * Page transition variants
 * - recieves a page path
 * - returns animation variants including `in` and `out` keyframes
 */
const transitions = (path: string): Variants => {
  switch (path) {
    case "/about":
      return {
        out: {
          x: "-100%",
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
        in: {
          x: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
      };
    case "/contact":
      return {
        out: {
          x: "100%",
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
        in: {
          x: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
      };
    default:
      return {
        out: {
          opacity: 0,
          scale: 0.8,
          transition: {
            duration: 0.2,
          },
        },
        in: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.2,
          },
        },
      };
  }
};

const PageTransition = ({ children }: Props) => {
  const { asPath } = useRouter();

  const variants = transitions(asPath);

  return (
    <div className="overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={asPath}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
