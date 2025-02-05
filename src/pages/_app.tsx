import "@/styles/globals.css";
import "@radix-ui/themes/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Theme } from "@radix-ui/themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme style={{ backgroundColor: "#F8F8F8" }}>
      <Head>
        <title>Pasific Travel</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-pacific-travelindo.svg" />
      </Head>
      <Component {...pageProps} />
    </Theme>
  );
}
