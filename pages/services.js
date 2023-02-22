import React from 'react';
import Head from 'next/head';

import Header from '../components/header';

const Services = () => {
  return (
    <>
      <Head>
        <title>Анита. Фото</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div>Сервисы</div>
    </>
  )
}

export default Services