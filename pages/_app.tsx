import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        crossOrigin="anonymous"
        integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
        src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
      />
      <Component {...pageProps} />
    </>
  );
}
