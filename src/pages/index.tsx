import { useContext } from 'react';
import {
  DesignView,
  DevelopmentView,
  Layout,
  PhotographyView,
} from '@/components';
import { ThemeContext, ThemeContextType } from '@/contexts';
import Head from 'next/head';

export default function Home() {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <>
      <Head>
        <title>Liba Design</title>
      </Head>
      <Layout>
        {theme === 'design' && <DesignView />}
        {theme === 'development' && <DevelopmentView />}
        {theme === 'photography' && <PhotographyView />}
      </Layout>
    </>
  );
}
