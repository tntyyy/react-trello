import React, {FC, useContext, useEffect, useState} from 'react';
import styles from './InfoPopup.module.scss';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {isMatchUrlEndpoint} from "@/utils/isMatchUrlEndpoint";
import {PopupEndpoints} from "@/types/popups";
import {ITask} from "@/types/task";
import taskService from "@/services/taskService";
import TaskService from "@/services/taskService";
import {BoardsContext} from "@/context/boardsContext";

const InfoPopup: FC = () => {
    const {boards, setBoards} = useContext(BoardsContext);
    const taskService = new TaskService(boards);

    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const params = useParams();
    const [task, setTask] = useState<ITask | null>(null);

    useEffect(() => {
        setIsOpen(isMatchUrlEndpoint(pathname, PopupEndpoints.TASK));
    }, [pathname]);

    useEffect(() => {
        const task = taskService.getOneTask(params.id!, params.boardId!);
        setTask(task!);
    }, );


    const handleClosePopup = () => {
        navigate("/");
    }

    if (isOpen) {
        return (
            <div className={styles.popup} onClick={() => handleClosePopup()}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.popup__header}>
                        <h3>{task?.name}</h3>
                        <span
                            className={styles.close}
                            onClick={() => handleClosePopup()}
                        >
                        </span>
                    </div>
                    <p>{task?.description || "Description is missing :("}</p>
                </div>
            </div>
        );
    }


    return <></>;
};

export default InfoPopup;
