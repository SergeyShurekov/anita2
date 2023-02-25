import React from 'react';
import Link from 'next/link'
// import Image from 'next/image';

// import anita_img from '../public/anita.png'
// import menu_img from '../public/menu.png'

import styles from '../styles/header.module.css'

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
          {/* <Link href='./' className={styles.ico}>
            <Image src={anita_img} alt='анита иконка' />
          </Link> */}

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

              <Link href="./photoes" className={styles.menubar_elem}>Фото</Link>

              <Link href="./prices" className={styles.menubar_elem}>Цены</Link>

              <Link href="./services" className={styles.menubar_elem}>Сервис</Link>

            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M449 381 323 716q-5 13 2 24t20.538 11q8.462 0 15.545-4.95Q368.167 741.1 371 733l31-91h159l32 92q2.571 8.053 9 12.526Q608.429 751 616.143 751 629 751 636.5 740.103 644 729.205 639 717L513 381q-3.621-10.267-12.31-16.133Q492 359 481 359q-11 0-19.69 5.867Q452.621 370.733 449 381Zm-32 213 61.286-163H483l62 163H417Zm-70.837 302H220q-24.75 0-42.375-17.625T160 836V710.413L68 618q-17-17.315-17-42.157Q51 551 68 534l92-92.413V316q0-24.75 17.625-42.375T220 256h125.587L438 164q17.315-17 42.157-17Q505 147 523 165l91 91h126q24.75 0 42.375 17.625T800 316v125.587L892 534q17 17.315 17 42.157Q909 601 892 618l-92 92.413V836q0 24.75-17.625 42.375T740 896H614l-91 90q-17.315 17-42.157 17Q456 1003 439 986l-92.837-90ZM481 575Zm0 368 107.917-107H740V685l109-109-109-109V316H589L481 207 371 316H220v151L111 576l109 109v151h150l111 107Z" /></svg>
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