import React, {FC, useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";
import Popup from "@/components/Popup/Popup";
import storageManager from "@/utils/storageManager";
import {IBoard} from "@/types/board";
import {v4 as uuidv4} from "uuid";

const MainPage: FC = () => {
    const storage = storageManager.getInstance();
    const [boards, setBoards] = useState<IBoard[]>(storage.getBoards());

    const createNewBoard = () => {
        const board: IBoard = {
            id: uuidv4(),
            name: "default board",
            tasks: []
        };

        storage.setBoard(board);
        setBoards(prevState => [...prevState, board]);
    }

    return (
      <>
        <Popup />
        <Header createBoard={createNewBoard}/>
        <div className={styles.content}>
            {
                boards
                &&
                boards.map(board =>
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
