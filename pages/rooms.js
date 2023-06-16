import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Photoes.module.css'

import r1 from '../public/images/1 этаж/1_1.webp';
import r2 from '../public/images/1 этаж/1_2.webp';
import r3 from '../public/images/1 этаж/1_3.webp';
import r4 from '../public/images/1 этаж/1_4.webp';
import r5 from '../public/images/1 этаж/1_5.webp';
import r6 from '../public/images/1 этаж/1_6.webp';
import r7 from '../public/images/1 этаж/1_7.webp';
import r8 from '../public/images/1 этаж/1_8.webp';
import r9 from '../public/images/1 этаж/1_9.webp';
import r10 from '../public/images/1 этаж/1_10.webp';
import r11 from '../public/images/1 этаж/1_11.webp';
import r12 from '../public/images/1 этаж/1_12.webp';
import r13 from '../public/images/1 этаж/1_13.webp';
import r14 from '../public/images/1 этаж/1_14.webp';

import Header from '../components/header';

const Rooms = () => {
  return (
    <>
      <Head>
        <title>Анита. Первый этаж</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Интерьеры номеров на 2-3-х человек' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Фотографии номеров первого этажа</h1>
        <section className={styles.section}>
          <div >
            <Image src={r1} alt='номер1' />
          </div>
          <div >
            <Image src={r2} alt='номер2' />
          </div>
          <div >
            <Image src={r3} alt='номер3' />
          </div>
          <div >
            <Image src={r4} alt='номер4' />
          </div>
          <div >
            <Image src={r5} alt='номер5' />
          </div>
          <div >
            <Image src={r6} alt='номер6' />
          </div>
          <div >
            <Image src={r7} alt='номер7' />
          </div>
          <div >
            <Image src={r8} alt='номер8' />
          </div>
          <div >
            <Image src={r9} alt='номер9' />
          </div>
          <div >
            <Image src={r10} alt='номер10' />
          </div>
          <div >
            <Image src={r11} alt='номер11' />
          </div>
          <div >
            <Image src={r12} alt='номер12' />
          </div>
          <div >
            <Image src={r13} alt='номер13' />
          </div>
          <div >
            <Image src={r14} alt='номер14' />
          </div>
        </section>
      </div>
    </>
  )
}

export default Rooms