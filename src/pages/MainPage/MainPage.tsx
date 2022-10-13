import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";
import Popup from "@/components/Popup/Popup";
import storageManager from "@/utils/storageManager";

const MainPage: FC = () => {
    const storage = storageManager.getInstance();

  return (
      <>
        <Popup />
        <Header />
        <div className={styles.content}>
            <Board />
        </div>
      </>
  );
};

export default MainPage;
