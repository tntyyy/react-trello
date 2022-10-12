import React, { FC } from 'react';
import styles from './Header.module.scss';

const Header: FC = () => {
  return (
      <header className={styles.header}>
          <h1 className={styles.logo}>Trello</h1>
          <button className={styles.createList}>Create list</button>
      </header>
  );
};

export default Header;
