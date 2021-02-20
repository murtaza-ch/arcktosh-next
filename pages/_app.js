import Head from 'next/head'
import "tailwindcss/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=3,user-scalable=yes" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
        <link href="/icon-256x256.png" rel="icon" type="image/png" sizes="256x256" />
        <link href="/icon-384x384.png" rel="icon" type="image/png" sizes="384x384" />
        <link href="/icon-512x512.png" rel="icon" type="image/png" sizes="512x512" />
        <link href="/icon-192x192.png" rel="apple-touch-icon" />
        <meta name="theme-color" content="#f69435"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}