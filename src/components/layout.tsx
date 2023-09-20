import React, { useContext } from 'react';
import clsx from 'clsx';
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
        <div className="basis-28">
          <CarouselNavigation />
        </div>
        <main className="basis-full self-stretch py-20">{children}</main>
        <div className="basis-28">
          <SocialLinks />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
