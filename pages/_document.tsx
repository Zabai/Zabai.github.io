import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
          rel="stylesheet"
        />
        <link
          crossOrigin="anonymous"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma-helpers/0.4.0/css/bulma-helpers.min.css"
          integrity="sha512-U6ELnUi7oqVEjkLmFw5r5UR5LEtvpImS/jUykBKneVhD0lxZxfJZ3k3pe003ktrtNZYungd9u3Urp2X09wKwXg=="
          rel="stylesheet"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
