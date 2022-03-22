import React from 'react';

import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en-US">
      <Head>
        <meta name="description" content="Salt Chang's website" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body data-theme="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
