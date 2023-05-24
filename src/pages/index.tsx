import { useContext } from "react";
import { DesignView, DevelopmentView, PhotographyView } from "@/components";
import { ThemeContext, ThemeContextType } from "@/contexts";

export default function Home() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      {theme === "design" && <DesignView />}
      {theme === "development" && <DevelopmentView />}
      {theme === "photography" && <PhotographyView />}
    </>
  );
}
