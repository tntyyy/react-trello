import React, { FC } from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";

const MainPage: FC = () => {
  return (
      <>
        <Header />
        <div className={styles.content}>
            <Board />
        </div>
      </>
  );
};

export default MainPage;
