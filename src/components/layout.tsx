import React, { useState } from "react";
import { BottomNavbar, TopNavbar } from ".";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [theme, setTheme] = useState<"design" | "development" | "photography">(
    "design"
  );

  return (
    <div
      className={`${theme} min-h-screen bg-secondary ${montserrat.className}`}
    >
      <TopNavbar />
      {children}
      <BottomNavbar />
    </div>
  );
};

export default Layout;
