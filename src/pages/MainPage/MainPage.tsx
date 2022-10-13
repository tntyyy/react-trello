import React, {FC, useEffect, useState} from 'react';
import styles from './MainPage.module.scss';
import Header from "@/components/Header/Header";
import Board from "@/components/Board/Board";
import Popup from "@/components/Popup/Popup";
import storageManager from "@/utils/storageManager";
import {ITask} from "@/types/task";
import {IBoard} from "@/types/board";

const MainPage: FC = () => {
    const storage = storageManager.getInstance();
    const [boards, setBoards] = useState<IBoard[]>(storage.getBoards());
    // const [tasks, setTasks] = useState<ITask[]>(storage.getTasks());


  return (
      <>
        <Popup />
        <Header storage={storage}/>
        <div className={styles.content}>
            {
                boards
                &&
                boards.map(board =>
                    <Board
                        id={board.id}
                        name={board.name}
                        tasks={board.tasks}
                    />
                )
            }
        </div>
      </>
  );
};

export default MainPage;
