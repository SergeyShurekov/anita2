import React from 'react';
import Head from 'next/head';

import Header from '../components/header';

const Prices = () => {
  return (
    <>
      <Head>
        <title>Анита. Фото</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div>Цены на услуги</div>
    </>
  )
}

export default Prices