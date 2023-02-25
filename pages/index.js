import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Header from '../components/header';
import { CardCommon, CardService } from '../components/cards';
import Connection from '../components/connection';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>гостевой дом Анита</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Интерьеры номеров на 2-3-х человек' />
      </Head>

      <Header />
      <main>

        <CardCommon />
        <h1 className={styles.order}><span>Бронировать</span></h1>
        <Connection />
        <CardService />

        <div className={styles.grid}>
          <Link href="./photoes" className={styles.card}>
            <h3>Фото номеров &rarr;</h3>
            <p>Номерной фонд: интерьеры, вид из окон, санузел.</p>
          </Link>

          <Link href="./prices" className={styles.card}>
            <h3>Цены &rarr;</h3>
            <p>Цены на услуги гостиничного дома</p>
          </Link>

        </div>
      </main>

      <footer>
        <a
          href="https://shurekov.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>Создано Сергей Шуреков</span>
        </a>
      </footer>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  )
}
