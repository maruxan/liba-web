import React, { useContext } from "react";
import { BottomNavbar, TopNavbar } from ".";
import { Montserrat } from "next/font/google";
import { ThemeContext, ThemeContextType } from "@/contexts";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme, switchTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div
      className={`${theme} min-h-screen flex flex-col justify-between bg-secondary ${montserrat.className}`}
    >
      <TopNavbar />
      {children}
      <BottomNavbar />
    </div>
  );
};

export default Layout;
