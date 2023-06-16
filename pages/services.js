import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Photoes.module.css'

import Header from '../components/header';
import Footer from '../components/Footer'

import s1 from '../public/images/leisure/l_1.webp'
import s2 from '../public/images/leisure/l_2.webp'
import s3 from '../public/images/leisure/l_3.webp'
import s4 from '../public/images/leisure/l_4.webp'
import s5 from '../public/images/leisure/l_5.webp'
import s6 from '../public/images/leisure/l_6.webp'
import s7 from '../public/images/leisure/l_7.webp'
import s8 from '../public/images/leisure/l_b1.webp'
import s9 from '../public/images/leisure/l_b2.webp'
import s10 from '../public/images/leisure/l_b3.webp'
import s11 from '../public/images/leisure/l_b4.webp'
import s12 from '../public/images/leisure/l_b5.webp'
import s13 from '../public/images/leisure/l_b6.webp'
import s14 from '../public/images/leisure/l_k1.webp'
import s15 from '../public/images/leisure/l_k2.webp'
import s16 from '../public/images/leisure/l_k3.webp'

const Services = () => {
  return (
    <>
      <Head>
        <title>Анита. Двор</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Фотографии бассейна, кухни, детской площадки' />
      </Head>

      <Header />

      <div className={styles.container}>
        <h1>Кухня, бассейн, детская площадка</h1>
        <section className={styles.section}>
          <div >
            <Image src={s1} alt='номер1' />
          </div>
          <div >
            <Image src={s2} alt='номер2' />
          </div>
          <div >
            <Image src={s3} alt='номер3' />
          </div>
          <div >
            <Image src={s4} alt='номер4' />
          </div>
          <div >
            <Image src={s5} alt='номер5' />
          </div>
          <div >
            <Image src={s6} alt='номер6' />
          </div>
          <div >
            <Image src={s7} alt='номер7' />
          </div>
          <div >
            <Image src={s8} alt='номер8' />
          </div>
          <div >
            <Image src={s9} alt='номер9' />
          </div>
          <div >
            <Image src={s10} alt='номер10' />
          </div>
          <div >
            <Image src={s11} alt='номер11' />
          </div>
          <div >
            <Image src={s12} alt='номер12' />
          </div>
          <div >
            <Image src={s13} alt='номер13' />
          </div>
          <div >
            <Image src={s14} alt='номер14' />
          </div>
          <div >
            <Image src={s15} alt='номер15' />
          </div>
          <div >
            <Image src={s16} alt='номер16' />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Services