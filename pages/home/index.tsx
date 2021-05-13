import React from 'react';
import { NextPage } from 'next';
import Home from 'src/components/mainComponents/home';
import Head from 'next/head';

const HomePage: NextPage = () => (
  <>
    <Head>
      <meta
        property="og:description"
        content="개발회사에서 만든 실무 코딩 부트캠프 || 개발자로 커리어점프 하다."
      />
    </Head>
    <Home />
  </>
);

export default HomePage;
