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
      </Head>
      <Component {...pageProps} />
    </>
  )
}
