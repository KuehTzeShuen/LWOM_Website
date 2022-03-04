import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { SEO } from "../next-seo.config";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
      </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp