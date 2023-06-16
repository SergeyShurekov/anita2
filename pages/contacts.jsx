import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/Footer';
import styles from '../styles/Rools.module.css';

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Контакты</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Контактные данные: телефон, адрес, карта, WhatsApp, Телеграм' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Как с нами связаться</h1>

      </div>
      <Footer />
    </>
  )
}

export default Contacts