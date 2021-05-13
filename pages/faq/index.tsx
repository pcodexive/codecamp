import React from 'react';
import { NextPage } from 'next';
import FaqComponent from 'src/components/mainComponents/faq';
import Head from 'next/head';

const FaqPage: NextPage = () => (
  <>
    <Head>
      <meta property="og:description" content="Q&A" />
    </Head>
    <FaqComponent />
  </>
);
export default FaqPage;
