import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Photoes.module.css'

import r1 from '../public/images/2 этаж/2_1.webp';
import r2 from '../public/images/2 этаж/2_2.webp';
import r3 from '../public/images/2 этаж/2_3.webp';
import r4 from '../public/images/2 этаж/2_4.webp';
import r5 from '../public/images/2 этаж/2_5.webp';
import r6 from '../public/images/2 этаж/2_6.webp';
import r7 from '../public/images/2 этаж/2_7.webp';
import r8 from '../public/images/2 этаж/2_8.webp';
import r9 from '../public/images/2 этаж/2_9.webp';
import r10 from '../public/images/2 этаж/2_10.webp';
import r11 from '../public/images/2 этаж/2_11.webp';
import r12 from '../public/images/2 этаж/2_12.webp';
import r13 from '../public/images/2 этаж/2_13.webp';
import r14 from '../public/images/2 этаж/2_14.webp';
import r15 from '../public/images/2 этаж/2_15.webp';
import r16 from '../public/images/2 этаж/2_16.webp';
import r17 from '../public/images/2 этаж/2_17.webp';
import r18 from '../public/images/2 этаж/2_18.webp';
import r19 from '../public/images/2 этаж/2_19.webp';
import r20 from '../public/images/2 этаж/2_20.webp';
import r21 from '../public/images/2 этаж/2_21.webp';
import r22 from '../public/images/2 этаж/2_22.webp';
import r23 from '../public/images/2 этаж/2_23.webp';
import r24 from '../public/images/2 этаж/2_24.webp';
import r25 from '../public/images/2 этаж/2_25.webp';

import Header from '../components/header';
import Footer from '../components/Footer';

const Floor2 = () => {
  return (
    <>
      <Head>
        <title>Анита. Второй этаж</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Второй этаж. Интерьеры номеров на 2-3-4х человек' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Фотографии номеров второго этажа</h1>
        <section className={styles.section}>
          <div >
            <Image src={r1} alt='номер1' />
          </div>
          <div >
            <Image src={r2} alt='номер2' />
          </div>
          <div >
            <Image src={r3} alt='номер2' />
          </div>
          <div >
            <Image src={r4} alt='номер2' />
          </div>
          <div >
            <Image src={r5} alt='номер2' />
          </div>
          <div >
            <Image src={r6} alt='номер2' />
          </div>
          <div >
            <Image src={r7} alt='номер2' />
          </div>
          <div >
            <Image src={r8} alt='номер2' />
          </div>
          <div >
            <Image src={r9} alt='номер2' />
          </div>
          <div >
            <Image src={r10} alt='номер2' />
          </div>
          <div >
            <Image src={r11} alt='номер2' />
          </div>
          <div >
            <Image src={r12} alt='номер2' />
          </div>
          <div >
            <Image src={r13} alt='номер2' />
          </div>
          <div >
            <Image src={r14} alt='номер2' />
          </div>
          <div >
            <Image src={r15} alt='номер2' />
          </div>
          <div >
            <Image src={r16} alt='номер2' />
          </div>
          <div >
            <Image src={r17} alt='номер2' />
          </div>
          <div >
            <Image src={r18} alt='номер2' />
          </div>
          <div >
            <Image src={r19} alt='номер2' />
          </div>
          <div >
            <Image src={r20} alt='номер2' />
          </div>
          <div >
            <Image src={r21} alt='номер2' />
          </div>
          <div >
            <Image src={r22} alt='номер2' />
          </div>
          <div >
            <Image src={r23} alt='номер2' />
          </div>
          <div >
            <Image src={r24} alt='номер2' />
          </div>
          <div >
            <Image src={r25} alt='номер2' />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Floor2