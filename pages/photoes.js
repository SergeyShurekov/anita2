import React from 'react';
import Head from 'next/head';

import Header from '../components/header';

const Photoes = () => {
  return (
    <>
      <Head>
        <title>Анита. Фото</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>Photoes</div>
    </>
  )
}

export default Photoes