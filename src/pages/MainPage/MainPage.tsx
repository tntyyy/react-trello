import React, {FC, useContext} from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";
import {BoardsContext} from "@/context/boardsContext";
import InfoPopup from "@/components/InfoPopup/InfoPopup";
import EditPopup from "@/components/EditPopup/EditPopup";

const MainPage: FC = () => {
    const {boards} = useContext(BoardsContext);

    return (
      <>
        <InfoPopup />
        <EditPopup />
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
