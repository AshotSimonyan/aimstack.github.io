import dynamic from 'next/dynamic';
import config from 'cms/config';

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((cms) => {

      // @ts-ignore
      cms.init({ config });
    }) as any,
  { ssr: false, loading: () => <p>Loading...</p> }
);

const AdminPage = () => {
  return <CMS />;
};

export default AdminPage;
