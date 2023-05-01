import React, { useContext } from "react";
import clsx from "clsx";
import { ThemeContext, ThemeContextType } from "@/contexts";

const BottomNavbar = () => {
  const { theme, switchTheme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <div className="py-6 px-12 flex items-center justify-center">
      <nav className="flex justify-center gap-12">
        <button
          type="button"
          onClick={() => switchTheme("design")}
          className={clsx(
            "font-bold text-lg text-primary",
            theme === "design" && "border-b-primary border-b-2"
          )}
        >
          DESIGN
        </button>
        <button
          type="button"
          onClick={() => switchTheme("development")}
          className={clsx(
            "font-bold text-lg text-primary",
            theme === "development" && "border-b-primary border-b-2"
          )}
        >
          DEVELOPMENT
        </button>
        <button
          type="button"
          onClick={() => switchTheme("photography")}
          className={clsx(
            "font-bold text-lg text-primary",
            theme === "photography" && "border-b-primary border-b-2"
          )}
        >
          PHOTOGRAPHY
        </button>
      </nav>
    </div>
  );
};

export default BottomNavbar;
