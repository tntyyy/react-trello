import React, {FC, useContext} from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";
import Popup from "@/components/Popup/Popup";
import {BoardsContext} from "@/context/boardsContext";

const MainPage: FC = () => {
    const {boards} = useContext(BoardsContext);

    return (
      <>
        <Popup />
        <Header/>
        <div className={styles.content}>
            {
                boards && boards.map((board) =>
                    <Board
                        id={board.id}
                        name={board.name}
                        tasks={board.tasks}
                        key={board.id}
                    />
                )
            }
        </div>
      </>
  );
};

export default MainPage;
