import React from 'react';
import { NextPage } from 'next';
import MapComponent from 'src/components/mainComponents/map';
import Head from 'next/head';

const MapPage: NextPage = () => (
  <>
    <Head>
      <meta property="og:description" content="오시는길" />
    </Head>
    <MapComponent />
  </>
);
export default MapPage;
