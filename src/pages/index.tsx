import { useContext } from "react";
import {
  DesignView,
  DevelopmentView,
  Layout,
  PhotographyView,
} from "@/components";
import { ThemeContext, ThemeContextType } from "@/contexts";

export default function Home() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <Layout>
      {theme === "design" && <DesignView />}
      {theme === "development" && <DevelopmentView />}
      {theme === "photography" && <PhotographyView />}
    </Layout>
  );
}
