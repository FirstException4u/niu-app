import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { logCustomEvent } from "@/fbAnalytics";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Set a default title and description
  const defaultTitle = 'Hivie';
  const defaultDescription = 'Hivie : Bridging the gap between brands and influencers';
  // Optionally, extract title and description from pageProps if needed
  const title = pageProps.title || defaultTitle;
  const description = pageProps.description || defaultDescription;

  useEffect(() => {
    logCustomEvent("page-load")
  }, []);

  return (
    <ThemeProvider>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
