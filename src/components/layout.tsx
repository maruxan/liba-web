import React, { useContext } from "react";
import clsx from "clsx";
import { BottomNavbar, CarouselNavigation, SocialLinks, TopNavbar } from ".";
import { Montserrat } from "next/font/google";
import { ThemeContext, ThemeContextType } from "@/contexts";

const montserrat = Montserrat({ subsets: ["latin"] });

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
        "min-h-screen flex flex-col justify-between bg-secondary"
      )}
    >
      <TopNavbar />
      <div className="flex justify-between items-center">
        <div className="basis-24">
          <CarouselNavigation />
        </div>
        {children}
        <div className="basis-24">
          <SocialLinks />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
