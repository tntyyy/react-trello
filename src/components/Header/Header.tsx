import React, { FC } from 'react';
import styles from './Header.module.scss';
import storageManager from "@/utils/storageManager";
import { v4 as uuidv4 } from 'uuid';

interface IHeaderProps {
    storage: storageManager;
}

const Header: FC<IHeaderProps> = ({storage}) => {

    const createNewBoard = () => {
        storage.setBoard({
           id: uuidv4(),
           name: "default board",
           tasks: []
        });
    }

  return (
      <header className={styles.header}>
          <h1 className={styles.logo}>Trello</h1>
          <button className={styles.createList} onClick={() => createNewBoard()}>Create board</button>
      </header>
  );
};

export default Header;
