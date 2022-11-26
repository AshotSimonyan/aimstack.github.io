import Head from "next/head";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Layout from "components/Layout/Layout";


const App = ({ Component, pageProps }) => {

  return ( <>
    <Head>
        <title>AimStack</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css"/>
    </Head>
      <DefaultSeo {...SEO} />
      <Layout>
          <Component {...pageProps} />
      </Layout>

  </>)
}

export default App
