import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Photoes.module.css'

import r1 from '../public/images/3 этаж/3_1.webp';
import r2 from '../public/images/3 этаж/3_2.webp';
import r3 from '../public/images/3 этаж/3_3.webp';
import r4 from '../public/images/3 этаж/3_4.webp';
import r5 from '../public/images/3 этаж/3_5.webp';
import r6 from '../public/images/3 этаж/3_6.webp';
import r7 from '../public/images/3 этаж/3_7.webp';
import r8 from '../public/images/3 этаж/3_8.webp';
import r9 from '../public/images/3 этаж/3_9.webp';
import r10 from '../public/images/3 этаж/3_10.webp';
import r11 from '../public/images/3 этаж/3_11.webp';
import r12 from '../public/images/3 этаж/3_12.webp';
import r13 from '../public/images/3 этаж/3_13.webp';
import r14 from '../public/images/3 этаж/3_14.webp';
import r15 from '../public/images/3 этаж/3_15.webp';
import r16 from '../public/images/3 этаж/3_16.webp';
import r17 from '../public/images/3 этаж/3_17.webp';
import r18 from '../public/images/3 этаж/3_18.webp';
import r19 from '../public/images/3 этаж/3_19.webp';
import r20 from '../public/images/3 этаж/3_20.webp';
import r21 from '../public/images/3 этаж/3_21.webp';
import r22 from '../public/images/3 этаж/3_22.webp';
import r23 from '../public/images/3 этаж/3_23.webp';
import r24 from '../public/images/3 этаж/3_24.webp';
import r25 from '../public/images/3 этаж/3_25.webp';
import r26 from '../public/images/3 этаж/3_26.webp';

import Header from '../components/header';
import Footer from '../components/Footer';

const Floor3 = () => {
  return (
    <>
      <Head>
        <title>Анита. Третий этаж</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Третий этаж. Интерьеры номеров на 2-3-4х человек' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Фотографии номеров третьего этажа</h1>
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
          <div >
            <Image src={r15} alt='номер15' />
          </div>
          <div >
            <Image src={r16} alt='номер16' />
          </div>
          <div >
            <Image src={r17} alt='номер17' />
          </div>
          <div >
            <Image src={r18} alt='номер18' />
          </div>
          <div >
            <Image src={r19} alt='номер19' />
          </div>
          <div >
            <Image src={r20} alt='номер20' />
          </div>
          <div >
            <Image src={r21} alt='номер21' />
          </div>
          <div >
            <Image src={r22} alt='номер22' />
          </div>
          <div >
            <Image src={r23} alt='номер23' />
          </div>
          <div >
            <Image src={r24} alt='номер24' />
          </div>
          <div >
            <Image src={r25} alt='номер25' />
          </div>
          <div >
            <Image src={r26} alt='номер26' />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Floor3