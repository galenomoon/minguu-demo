import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  const title = 'Minguu - Encontre roupas que combinam com você'
  const description = 'Minguu é uma aplicação que te ajuda a encontrar roupas que combinam com você. Selecione os estilos que você mais gosta e descubra onde comprar as peças que combinam com você.'
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>
          {title}
        </title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/assets/mingu-384x384.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/mingu-384x384.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/mingu-384x384.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/assets/mingu-384x384.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content="https://minguu-demo.vercel.app/" />
        <meta property="og:image" content="/assets/mingu-384x384.png" />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        {/* <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}
