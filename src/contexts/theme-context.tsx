import React, { createContext, useState } from "react";
import { Theme } from "@/types";

export type ThemeContextType = {
  theme: Theme;
  themes: Theme[];
  switchTheme: (theme: Theme) => void;
  nextTheme: () => void;
  prevTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const themes: Theme[] = ["design", "development", "photography"];
  const [theme, setTheme] = useState<Theme>(themes[0]);

  const nextTheme = () => {
    // tries to find the following theme in the array, if it doesn't exist it goes back to the first theme
    const newTheme = themes[themes.indexOf(theme) + 1] ?? themes.at(0);
    setTheme(newTheme);
  };

  const prevTheme = () => {
    // tries to find the previous theme in the array, if it doesn't exist it goes all the way to the end
    const newTheme = themes[themes.indexOf(theme) - 1] ?? themes.at(-1);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, themes, switchTheme: setTheme, nextTheme, prevTheme }}
    >
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
