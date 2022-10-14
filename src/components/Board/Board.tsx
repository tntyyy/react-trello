import React, {FC, useContext} from 'react';
import styles from './Board.module.scss';
import Task from "@/components/Task/Task";
import {IBoard} from "@/types/board";
import {BoardsContext} from "@/context/boardsContext";
import BoardService from "@/services/boardService";

const Board: FC<IBoard> = ({id, name, tasks}) => {
    const {boards, setBoards} = useContext(BoardsContext);
    const boardService = new BoardService(boards);

    const deleteBoard = () => {
        const newBoards = boardService.deleteBoard(id);
        setBoards(newBoards);
    }

    const saveEditingBoard = (event: React.FocusEvent<HTMLHeadingElement>) => {
        const newBoards: IBoard[] = boardService.saveEditingName(id, event.target.textContent!);
        setBoards(newBoards);
    }

    const createTask = () => {
        const newBoards = boardService.createTask(id);
        setBoards(newBoards);
    };

    return (
      <div className={styles.board}>
          <div className={styles.board__header}>
              <h3
                  className={styles.board__name}
                  contentEditable={true}
                  suppressContentEditableWarning={true}
                  onBlur={(event) => saveEditingBoard(event)}
              >
                  {name}
              </h3>
              <div className={styles.board__buttons}>
                  <button
                    onClick={() => deleteBoard()}
                  >
                      <svg
                          fill="rgba(55, 53, 47, 0.85)"
                          className="trash"
                          display="block"
                          viewBox="0 0 16 16"
                          style={{
                              width: 16,
                              height: 16,
                              WebkitFlexShrink: "0",
                              flexShrink: "0",
                              backfaceVisibility: "hidden",
                          }}
                      >
                          <path d="M4.862 15.429h6.283c1.045 0 1.722-.636 1.77-1.689l.465-9.85h.752c.342 0 .608-.26.608-.602a.594.594 0 00-.608-.595H11.09V1.668C11.09.622 10.427 0 9.292 0H6.694C5.566 0 4.896.622 4.896 1.668v1.025H1.861a.598.598 0 100 1.196h.76l.464 9.858c.048 1.053.718 1.682 1.777 1.682zm1.292-13.7c0-.355.246-.58.63-.58h2.42c.382 0 .628.225.628.58v.964H6.154V1.73zM4.992 14.22c-.376 0-.65-.274-.67-.677L3.864 3.89h8.251l-.444 9.652c-.014.403-.287.677-.677.677H4.992zm.991-1.1c.288 0 .472-.185.465-.452l-.205-7.164c-.007-.274-.198-.451-.472-.451-.287 0-.471.184-.464.45l.205 7.165c.007.273.198.451.471.451zm2.017 0c.287 0 .479-.185.479-.452V5.503c0-.267-.192-.451-.479-.451s-.479.184-.479.45v7.165c0 .267.192.451.479.451zm2.017 0c.273 0 .458-.179.464-.452l.212-7.164c.007-.267-.184-.451-.464-.451-.274 0-.465.177-.472.45l-.212 7.165c-.007.267.184.451.472.451z"></path>
                      </svg>
                  </button>
                  <button
                    onClick={() => createTask()}
                  >
                      <svg
                          fill="rgba(55, 53, 47, 0.85)"
                          className="plus"
                          display="block"
                          viewBox="0 0 16 16"
                          style={{
                              width: 16,
                              height: 16,
                              WebkitFlexShrink: "0",
                              flexShrink: "0",
                              backfaceVisibility: "hidden",
                          }}
                      >
                          <path d="M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"></path>
                      </svg>
                  </button>
              </div>
          </div>
          <div className={styles.board__content}>
              {
                  tasks && tasks.map((task) => (
                      <Task
                          id={task.id}
                          name={task.name}
                          description={task.description}
                          boardId={task.boardId}
                          key={task.id}
                      />
                ))
              }
          </div>
      </div>
  );
};

export default Board;