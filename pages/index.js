import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Header from '../components/header';
import { CardCommon, CardService } from '../components/cards';
import Connection from '../components/connection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>гостевой дом Анита</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Интерьеры номеров на 2-3-х человек' />
      </Head>
      <Header />
      <div className={styles.container}>

        <main>

          <CardCommon />
          <h1 className={styles.order}><span>Бронировать</span></h1>
          <Connection />
          <CardService />
          <div>
            <ul>
              <li><strong>Горная река «Псезуапсе»</strong> - 5-7 минут ходьбы</li>
              <li><strong>Wi-Fi</strong> – на всей территории</li>
              <li><strong>Парковка</strong> (платная) на территории – при наличии мест</li>
              <li><strong>Трансфер</strong> – ж/д, автовокзал</li>
              <li><strong>Стирка</strong> – услуга платная</li>
              <li><strong>Глажка</strong> – на каждом этаже утюг+г/доска</li>
              <li><strong>Беседка</strong> – оборудованная мангальная зона</li>
              <li><strong>Детская кроватка</strong> – при наличии свободной</li>
            </ul>
          </div>

          <div className={styles.grid}>

            <Link href="/Floor1" className={styles.card}>
              <h3>Первый этаж&rarr;</h3>
              <p>Номерной фонд: интерьеры, вид из окон, санузел.</p>
            </Link>
            <Link href="/Floor2" className={styles.card}>
              <h3>Второй этаж&rarr;</h3>
              <p>Номерной фонд: интерьеры, вид из окон, санузел.</p>
            </Link>
            <Link href="/Floor3" className={styles.card}>
              <h3>Третий этаж&rarr;</h3>
              <p>Номерной фонд: интерьеры, вид из окон, санузел.</p>
            </Link>
            <Link href="/services" className={styles.card}>
              <h3>Зона отдыха&rarr;</h3>
              <p>Бассейн, кухня, детский дворик.</p>
            </Link>
            <Link href="/rools" className={styles.card}>
              <h3>Правила &rarr;</h3>
              <p>Условия бронирования, правила проживания.</p>
            </Link>

          </div>

          <h1>Цены на летний сезон 2023 года</h1>
          <table className={styles.table} >
            <thead>
              <tr>
                <th >Период</th>
                <th >2х-местный</th>
                <th >3х-местный</th>
                <th >4х-местный</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01.06.-15.06.</td>
                <td>1800</td>
                <td>2000</td>
                <td>2600</td>
              </tr>
              <tr>
                <td>16.06.-30.06.</td>
                <td>2400</td>
                <td>2500</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>01.07.-31.07.</td>
                <td>3400</td>
                <td>3600</td>
                <td>4200</td>
              </tr>
              <tr>
                <td>01.08.-31.08.</td>
                <td>3400</td>
                <td>3600</td>
                <td>4200</td>
              </tr>
              <tr>
                <td>01.09.-20.09.</td>
                <td>2400</td>
                <td>3000</td>
                <td>3500</td>
              </tr>
              <tr>
                <td>21.09.-30.09.</td>
                <td>2000</td>
                <td>2500</td>
                <td>3000</td>
              </tr>
            </tbody>
          </table>

        </main>

        <Footer />

        <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
    </div >
  )
}
