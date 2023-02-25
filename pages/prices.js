import React from 'react';
import Head from 'next/head';

import Header from '../components/header';

const Prices = () => {
  return (
    <>
      <Head>
        <title>Анита. Фото</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Интерьеры номеров на 2-3-х человек' />
      </Head>
      <Header />

      <div>Цены на услуги</div>
    </>
  )
}

export default Prices