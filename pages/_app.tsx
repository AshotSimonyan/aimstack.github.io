import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Layout from 'components/Layout/Layout';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>AimStack</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component teeest={'asd'} {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
