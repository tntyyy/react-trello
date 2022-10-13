import React, {FC, useEffect, useState} from 'react';
import styles from './Popup.module.scss';
import {useParams, useNavigate} from "react-router-dom";

const Popup: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(Boolean(params.id));
    }, [params]);

    const handleClosePopup = () => {
        navigate("/");
    }

    if (isOpen) {
        return (
            <div className={styles.popup} onClick={() => handleClosePopup()}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <input className={styles.popup__input} type="text" defaultValue={"name of task"}/>
                    <textarea className={styles.popup__input} placeholder={"Enter description..."} defaultValue={"description of task"}></textarea>
                    <button>Update task</button>
                </div>
            </div>
        );
    }


    return <></>;
};

export default Popup;
