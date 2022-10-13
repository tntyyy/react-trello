import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";
import Popup from "@/components/Popup/Popup";

const MainPage: FC = () => {
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
