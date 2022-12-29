import React from "react";
//css
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
//
import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline, CssVarsProvider } from "@mui/joy";
import "@fontsource/poppins";
import "@fontsource/league-spartan";
import createEmotionCache from "../utils/emotionCache";
import lightTheme from "../themes/defaultTheme";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { store } from "../ui/store";
import { Provider } from "react-redux";

// wagmi stuff

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, goerli, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { rainbowTheme } from "../themes/rainbowTheme";

// progress bar
import NextNProgress from "nextjs-progressbar";

const { chains, provider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "eavolution smart tickets",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { pageProps, Component, emotionCache = clientSideEmotionCache } = props;
  return (
    <Provider store={store}>
      <WagmiConfig client={wagmiClient}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <RainbowKitProvider chains={chains} theme={rainbowTheme}>
            <CacheProvider value={emotionCache}>
              <CssVarsProvider theme={lightTheme}>
                <CssBaseline />
                <NextNProgress color="#353535" />
                <Component {...pageProps} />
              </CssVarsProvider>
            </CacheProvider>
          </RainbowKitProvider>
        </SessionProvider>
      </WagmiConfig>
    </Provider>
  );
};

export default MyApp;
