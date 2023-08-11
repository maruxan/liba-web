import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts";
import { PageTransition } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageTransition>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </PageTransition>
  );
}
