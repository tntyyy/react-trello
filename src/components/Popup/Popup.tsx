import React, {FC, useContext, useEffect, useState} from 'react';
import styles from './Popup.module.scss';
import {useParams, useNavigate} from "react-router-dom";
import {BoardsContext} from "@/context/boardsContext";
import TaskService from "@/services/taskService";

const Popup: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const {boards, setBoards} = useContext(BoardsContext);
    const taskService = new TaskService(boards);

    useEffect(() => {
        setIsOpen(Boolean(params.id));
    }, [params]);

    const handleClosePopup = () => {
        navigate("/");
    }

    const handleSubmit = () => {
        const boardsCopy = taskService.editTask(params.id!);
        console.log(boardsCopy);
    }

    if (isOpen) {
        return (
            <div className={styles.popup} onClick={() => handleClosePopup()}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <input className={styles.popup__input} type="text" defaultValue={"name of task"}/>
                    <textarea className={styles.popup__input} placeholder={"Enter description..."} defaultValue={"description of task"}></textarea>
                    <button
                        onClick={() => handleSubmit()}
                    >
                        Update task
                    </button>
                </div>
            </div>
        );
    }


    return <></>;
};

export default Popup;
