import React from 'react';
import { NextPage } from 'next';
import CodeCampFComponent from 'src/components/mainComponents/codecampF';
import Head from 'next/head';

const CodeCampPage: NextPage = () => (
  <>
    <Head>
      <meta
        property="og:description"
        content="코드캠프는 개발자의 성장을 응원하며, 친절하고 혁명적인 커리큘럼을 제공합니다."
      />
    </Head>
    <CodeCampFComponent />
  </>
);
export default CodeCampPage;
