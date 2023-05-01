import React, { useContext } from "react";
import clsx from "clsx";
import { ThemeContext, ThemeContextType } from "@/contexts";

const activeClassName =
  "relative before:block before:absolute before:z-[1] before:-inset-2 before:w-7 before:h-7 before:rounded-full before:border-4 before:border-primary";

const CarouselNavigation = () => {
  const { theme, switchTheme, nextTheme, prevTheme } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <div className="flex flex-col justify-center items-center w-20">
      <button
        className="w-7 h-7 rounded-full bg-primary mb-5 flex items-center justify-center shadow-md"
        onClick={prevTheme}
      >
        <span className="text-secondary font-bold text-lg">&uarr;</span>
      </button>

      <button
        className={clsx(
          "w-3 h-3 rounded-full bg-primary -mb-1",
          theme === "design" && activeClassName
        )}
        onClick={() => switchTheme("design")}
      />
      <div className="w-0.5 h-24 bg-primary" />
      <button
        className={clsx(
          "w-3 h-3 rounded-full bg-primary -mb-1 -mt-1",
          theme === "development" && activeClassName
        )}
        onClick={() => switchTheme("development")}
      />
      <div className="w-0.5 h-24 bg-primary" />
      <button
        className={clsx(
          "w-3 h-3 rounded-full bg-primary -mt-1",
          theme === "photography" && activeClassName
        )}
        onClick={() => switchTheme("photography")}
      />

      <button
        className="w-7 h-7 rounded-full bg-primary mt-5 flex items-center justify-center shadow-md"
        onClick={nextTheme}
      >
        <span className="text-secondary font-bold text-lg">&darr;</span>
      </button>
    </div>
  );
};

export default CarouselNavigation;
