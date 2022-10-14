import React, {FC, useContext, useEffect, useState} from 'react';
import styles from './Popup.module.scss';
import {useParams, useNavigate} from "react-router-dom";
import {BoardsContext} from "@/context/boardsContext";
import TaskService from "@/services/taskService";
import {IField, ITask} from "@/types/task";

const Popup: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const {boards, setBoards} = useContext(BoardsContext);
    const taskService = new TaskService(boards);

    const initFieldsState = {
        name: "",
        description: ""
    }

    const [fields, setFields] = useState<IField>(initFieldsState);

    useEffect(() => {
        setIsOpen(Boolean(params.id));
    }, [params]);

    const handleClosePopup = () => {
        navigate("/");
    }

    const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFields(prevState => ({...prevState, ["name"]: event.target.value}));
    }

    const handleInputDescriptionChange = (event:  React.ChangeEvent<HTMLTextAreaElement>) => {
        setFields(prevState => ({...prevState, ["description"]: event.target.value}));
    }

    const handleSubmit = () => {
        const boardsCopy = taskService.editTask(params.id!, params.boardId!, fields.name, fields.description);
        setBoards(boardsCopy);
        setFields(initFieldsState);
        handleClosePopup();
    }

    if (isOpen) {
        return (
            <div className={styles.popup} onClick={() => handleClosePopup()}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <input
                        onChange={(event) => handleInputNameChange(event)}
                        value={fields.name}
                        className={styles.popup__input}
                        type="text"
                        placeholder={"edit name..."}
                    />
                    <textarea
                        onChange={(event) => handleInputDescriptionChange(event)}
                        value={fields.description}
                        className={styles.popup__input}
                        placeholder={"edit description..."}
                    ></textarea>
                    <button
                        className={!(fields.name && fields.description) ? styles.disabled : ''}
                        onClick={() => handleSubmit()}
                        disabled={!(fields.name && fields.description)}
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
