import React from 'react';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/Footer';
import styles from '../styles/Rools.module.css';

const Booking = () => {
  return (
    <>
      <Head>
        <title>Правила</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name='description' content='гостевой дом Анита в Сочи Лазаревском. Описание' />
      </Head>
      <Header />
      <div className={styles.container}>
        <h1>Анонс</h1>
        <p>Гостевой дом "Анита" открылся в июле 2017 года. К Вашим услугам комфортные номера со всеми удобствами. На просторной территории располагается кухня для самостоятельного приготовления, зона барбекю, детская игровая площадка, подогреваемый бассейн с детской и взрослой зонами, шезлонги, бесплатная автостоянка (не бронируется), Wi-Fi, видеонаблюдение. От гостевого дома до пляжа «Багратион» или «Центральный» 15-20 минут ходьбы "спокойным шагом" по ровной асфальтированной дороге без ступенек, спусков и подъемов. На полпути к морю будет один переход по светофору через федеральную трассу. Также в удобном расположении и шаговой доступности от нашего объекта есть множество столовых, магазины, аптека, рынок, аквапарк «Наутилус». Для удобства некоторых категорий отдыхающих на территории нашего микрорайона работает транспорт для поездок на пляж и обратно (микроавтобусы разной вместимости, услуга платная). Для желающих окунуться в прохладу чистейшей воды в 5-7 минутах от нашего дома протекает горная река «Псезуапсе».</p>
        <h1>Описание</h1>
        <p>Во всех номерах комплектация одинаковая:</p>
        <ul>
          <li>двуспальная кровать (по желанию клиента превратим в две односпальные кровати), а также 2-спальный раскладной диван;</li>
          <li>прикроватные тумбочки</li>
          <li>телевизор (стандартные 20 российских каналов);</li>
          <li>сплит-система (тепло/холод);
          </li>
          <li>холодильник;</li>
          <li>шкаф для одежды;</li>
          <li>санузел (д/кабина, раковина, унитаз, зеркало, п/сушитель).</li>
        </ul>
        <p>Номера на втором и третьем этажах с выходом на собственные просторные балконы (стол и четыре стула для отдыха).
          Первый этаж особенно удобен для гостей с маленькими детьми, выход из номера осуществляется непосредственно во двор дома, и ребенок беспрепятственно может дойти до игровой площадки.
          Для самостоятельного приготовления еды для наших гостей на территории оборудована летняя кухня, укомплектованная всем необходим:</p>

        <ul>
          <li>две встроенные варочные поверхности</li>
          <li>две мойки</li>
          <li>СВЧ-печь</li>
          <li>чайники</li>
          <li>фильтр для воды</li>
          <li>вся необходимая посуда</li>
          <li>столовые принадлежности.</li>
        </ul>
        <p>Рядом с кухней под навесом расположены обеденные столы с прямым видом на детскую площадку и бассейн — для удобства контроля детей, а также большой телевизор для просмотра спутниковых телепередач. Для взрослых и детей на территории гостевого дома работает бассейн с подогревом (26-28 0С) с детской (глубина 110 см.) и взрослой (160 см.) зонами. Время работы бассейна с 0800 ч. до 2100 ч.</p>
        <h1>Сервис и услуги</h1>
        <ul>
          <li>Уборка в номере осуществляется 1 раз в 5 дней</li>
          <li>Смена белья в номере осуществляется 1 раз в 5 дней</li>
          <li>Зона сушки белья, гладильная доска, утюг – на каждом этаже</li>
          <li>Услуга стирки белья - услуга платная (300 р./1 цикл)</li>
          <li>Автостоянка на территории гостиницы под видеонаблюдением (при наличии мест по факту) – услуга платная (100 р./сутки)</li>
          <li>Встреча с железнодорожного вокзала курорта Лазаревское</li>
          <li>Встреча гостей, приезжающих на автомобиле, на трассе</li>
          <li>Интернет wi-fi</li>
          <li>Пользование бассейном с 08:00 ч. до 21:00 ч.</li>
          <li>Пользование кухней с 08:00 ч. до 22:00 ч.</li>
          <li>Пользование беседкой с 08:00 ч. до 22:00 ч.</li>
        </ul>
        <h1>Ограничения</h1>
        <p>Курение всех видов табака (сигареты, электронные сигареты, Iqos, кальян и др.) в номерах, на балконах и на территории строго запрещено (разрешено только в отведенном месте – в беседке).<br />
          Извините, но с животными не принимаем.<br />
          Все увеселительные мероприятия на территории гостевого дома разрешены только до 2200 ч. За нарушение правил проживания в гостевом доме следует устное предупреждение. За повторное нарушение предусмотрено принудительное выселение постояльца/постояльцев.</p>
        <h1>Контактная информация</h1>
        <p>Адрес: г. Сочи, п. Лазаревское, ул. Единство, 31А (ныне ул. Эвкалиптовая).
          Телефоны для справок и бронирования: +79183074759, +79183031925.
          E-mail: aslan1977@mail.ru, anitahotel@yandex.ru</p>
        <h1>Цены на летний сезон 2023 года</h1>
        <table className={styles.table} >
          <thead>
            <tr>
              <th >Категория</th>
              <th >01.06.-15.06.</th>
              <th >16.06.-30.06.</th>
              <th >01.07.-31.07.</th>
              <th >01.08.-31.08.</th>
              <th >01.09.-20.09.</th>
              <th >21.09.-30.09.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2х-местный</td>
              <td>1800</td>
              <td>2400</td>
              <td>3400</td>
              <td>3400</td>
              <td>2400</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>3х-местный</td>
              <td>2000</td>
              <td>2500</td>
              <td>3600</td>
              <td>3600</td>
              <td>3000</td>
              <td>2500</td>
            </tr>
            <tr>
              <td>4х-местный</td>
              <td>2600</td>
              <td>3000</td>
              <td>4200</td>
              <td>4200</td>
              <td>3500</td>
              <td>3000</td>
            </tr>
          </tbody>
        </table>
      </div >
      <Footer />
    </>
  )
}

export default Booking