import React, {FC, useContext} from 'react';
import styles from './Header.module.scss';
import {IBoard} from "@/types/board";
import {v4 as uuidv4} from "uuid";
import storageManager from "@/utils/storageManager";
import {BoardsContext} from "@/context/boardsContext";


const Header: FC = () => {
    const storage = storageManager.getInstance();
    const {setBoards} = useContext(BoardsContext);

    const createNewBoard = () => {
        const board: IBoard = {
            id: uuidv4(),
            name: "default board",
            tasks: []
        };

        storage.setBoard(board);
        setBoards((prevState) => [...prevState, board]);
    }

  return (
      <header className={styles.header}>
          <h1 className={styles.logo}>Trello</h1>
          <button className={styles.createList} onClick={() => createNewBoard()}>Create board</button>
      </header>
  );
};

export default Header;
