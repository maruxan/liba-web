import React, { createContext, useState } from "react";
import { Theme } from "@/types";

export type ThemeContextType = {
  theme: Theme;
  switchTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>("design");

  return (
    <ThemeContext.Provider value={{ theme, switchTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
