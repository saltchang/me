import * as React from 'react';

import ModeSwitch from 'components/mode-switch';
import Head from 'next/head';
import { AppContainer, Header } from 'styles/components/_app.style';

import '../styles/index.scss';

import type { AppProps } from 'next/app';
const App = ({ Component, pageProps }: AppProps) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.body.dataset.theme = isDarkMode ? 'dark' : '';
  }, [isDarkMode]);

  return (
    <>
      <Head>
        <title>Salt Chang</title>
      </Head>
      <AppContainer>
        <Header>
          <ModeSwitch
            onSwitchMode={(isDark) => setIsDarkMode(isDark)}
            defaultDark
          />
        </Header>
        <Component {...pageProps} isDarkMode={isDarkMode} />
      </AppContainer>
    </>
  );
};

export default App;
