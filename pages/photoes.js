import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Photoes.module.css'

import r1 from '../public/images/rooms/r1.jpg';
import r2 from '../public/images/rooms/r2.jpg';
import r3 from '../public/images/rooms/r3.jpg';
import r4 from '../public/images/rooms/r4.jpg';
import r5 from '../public/images/rooms/r5.jpg';
import r6 from '../public/images/rooms/r6.jpg';
import r7 from '../public/images/rooms/r7.jpg';
import r8 from '../public/images/rooms/r8.jpg';
import r9 from '../public/images/rooms/r9.jpg';
import r10 from '../public/images/rooms/r10.jpg';
import r11 from '../public/images/rooms/r11.jpg';
import r12 from '../public/images/rooms/r12.jpg';
import r13 from '../public/images/rooms/r13.jpg';
import r14 from '../public/images/rooms/r14.jpg';
import r15 from '../public/images/rooms/r15.jpg';

import Header from '../components/header';

const Photoes = () => {
  return (
    <>
      <Head>
        <title>Анита. Фото</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Интерьеры номеров на 2-3-х человек' />
      </Head>
      <Header />
      <div>
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
        </section>
      </div>
    </>
  )
}

export default Photoes