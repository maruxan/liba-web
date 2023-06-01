import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components";
import { ThemeProvider } from "@/contexts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
