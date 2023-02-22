import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

import anita_img from '../public/anita.png'
import menu_img from '../public/menu.png'

import styles from '../styles/header.module.css'

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const handleOpenNavMenu = () => {
    setMenuActive(!menuActive);
    console.log(menuActive);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className={styles.box} >
      <div className={styles.header_components}>
        <div className={styles.tool_bar}>
          {/* <Link href='./' className={styles.ico}>
            <Image src={anita_img} alt='анита иконка' />
          </Link> */}

          <div className={styles.menu_butterbread}>

            <button className={styles.menu_butterbread_button} onClick={handleOpenNavMenu}>
              <Image src={menu_img} className={styles.menubb_btn} alt='иконка меню' />
            </button>

            <div className={menuActive ? styles.menubar : styles.active}
            // id="menu-appbar"
            // anchorel={anchorElNav}

            // open={Boolean(anchorElNav)}
            // onClose={handleCloseNavMenu}
            >

              <Link href="./photoes" className={styles.menubar_elem}>Фото</Link>

              <Link href="./prices" className={styles.menubar_elem}>Цены</Link>

              <Link href="./services" className={styles.menubar_elem}>Сервис</Link>

            </div>
          </div>
          <Image src={anita_img} alt='иконка анита' />
          <Link href='./' className={styles.name900}>
            Анита
          </Link>
          <Link href='./' className={styles.name2}>
            Анита
          </Link>
          <div className={styles.menu2} id='menu2'>

            <Link href="./photoes" >Фото &rarr;</Link>

            <Link href="./prices" >Цены &rarr;</Link>

            <Link href="./services" >Сервис &rarr;</Link>

          </div>
        </div>
      </div>

    </div >
  );
}

export default Header