import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

import anita_logo from '../public/a_logo.jpg'
// import anita_img from '../public/anita.png'
// import menu_img from '../public/menu.png'

import styles from '../styles/header.module.css';
import fonts from '../styles/fonts.module.css';

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(true);

  const handleOpenNavMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className={styles.box} >
      <div className={styles.header_components}>
        <div className={styles.tool_bar}>
          <div className={styles.menu_butterbread}>

            <button className={styles.menu_butterbread_button} onClick={handleOpenNavMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg>
            </button>

            <div className={menuActive ? styles.menubar : styles.active}
            // id="menu-appbar"
            // anchorel={anchorElNav}

            // open={Boolean(anchorElNav)}
            // onClose={handleCloseNavMenu}
            >

              <Link href="/" className={styles.menubar_elem}>Главная</Link>
              <Link href="/Floor1" className={styles.menubar_elem}>1-й этаж</Link>
              <Link href="/Floor2" className={styles.menubar_elem}>2-й этаж</Link>
              <Link href="/Floor3" className={styles.menubar_elem}>3-й этаж</Link>
              <Link href="/services" className={styles.menubar_elem}>Услуги</Link>
              <Link href="/rools" className={styles.menubar_elem}>Бронирование</Link>
              <Link href="/booking" className={styles.menubar_elem}>Проживание</Link>
              <Link href="/gallery" className={styles.menubar_elem}>Фотогалерея</Link>
              <Link href="/contacts" className={styles.menubar_elem}>Контакты</Link>

            </div>
          </div>
          <Image src={anita_logo} width={64} height={64} alt='' />
          <Link href='/' className={`${styles.name900} ${fonts.dancing}`}>
            Анита
          </Link>
          <Link href='/' className={`${styles.name2} ${fonts.dancing}`}>
            Анита
          </Link>
          <div className={styles.menu2}>
            <ul>
              <li ><Link href="">Номера</Link>
                <ul className={styles.subMenu}>
                  <li><Link href="/Floor1">1-й этаж</Link></li>
                  <li><Link href="/Floor2">2-й этаж</Link></li>
                  <li><Link href="/Floor3">3-й этаж</Link></li>
                </ul>
              </li>

              <li><Link href="/services">Услуги</Link></li>
              <li><Link href="">Клиентам</Link>
                <ul className={styles.subMenu}>
                  <li><Link href="/rools">Бронирование</Link></li>
                  <li><Link href="/booking">Проживание</Link></li>
                </ul>
              </li>
              <li><Link href="/gallery">Фотогалерея</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
            </ul>

          </div>
        </div>
      </div>

    </div >
  );
}

export default Header