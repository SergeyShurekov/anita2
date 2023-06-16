import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://shurekov.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className={styles.logo}>Создано Сергей Шуреков</span>
      </a>
    </div>
  )
}

export default Footer