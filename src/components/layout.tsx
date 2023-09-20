import React, { useContext } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BottomNavbar, CarouselNavigation, SocialLinks, TopNavbar } from '.';
import { Montserrat } from 'next/font/google';
import { ThemeContext, ThemeContextType } from '@/contexts';

const montserrat = Montserrat({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div
      className={clsx(
        theme,
        montserrat.className,
        'min-h-screen flex flex-col justify-between'
      )}>
      <TopNavbar />
      <div className="flex justify-between items-center grow">
        <motion.div
          animate={{ x: [-100, 0], transition: { delay: 0.5 } }}
          className="basis-28">
          <CarouselNavigation />
        </motion.div>
        <main className="basis-full self-stretch py-20">{children}</main>
        <motion.div
          animate={{ x: [100, 0], transition: { delay: 0.5 } }}
          className="basis-28">
          <SocialLinks />
        </motion.div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
