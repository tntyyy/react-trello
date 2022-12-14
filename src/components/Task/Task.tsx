import React, {FC, useContext} from 'react';
import styles from './Task.module.scss';
import {Link, useNavigate} from "react-router-dom";
import {ITask} from "@/types/task";
import {BoardsContext} from "@/context/boardsContext";
import TaskService from "@/services/taskService";

const Task: FC<ITask> = ({id, name, description, boardId}) => {

    const {boards, setBoards} = useContext(BoardsContext);
    const taskService = new TaskService(boards);

    const navigate = useNavigate();

    const handleNavigate = (event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        navigate(`/edit/${boardId}/${id}`);
    }

    const handleDeleteTask = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.stopPropagation();
        event.preventDefault();
        const boardCopy = taskService.deleteTask(id, boardId);
        setBoards(boardCopy);
    }

    return (
      <Link to={`/task/${boardId}/${id}`} className={styles.task}>
          <span className={styles.task__title}>{name}</span>
          <div className={styles.task__buttons}>
              <button
                onClick={(event) => handleNavigate(event)}
              >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 -32 576 576"
                  >
                      <path d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
                  </svg>
              </button>
              <button
                onClick={(event) => handleDeleteTask(event)}
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
          </div>
      </Link>
  );
};

export default Task;
