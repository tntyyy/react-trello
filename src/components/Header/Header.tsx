import React, { FC } from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
    createBoard: () => void;
}

const Header: FC<IHeaderProps> = ({createBoard}) => {

  return (
      <header className={styles.header}>
          <h1 className={styles.logo}>Trello</h1>
          <button className={styles.createList} onClick={() => createBoard()}>Create board</button>
      </header>
  );
};

export default Header;
