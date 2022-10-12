import React, {FC, useEffect, useState} from 'react';
import styles from './Popup.module.scss';
import {useParams} from "react-router-dom";

const Popup: FC = () => {
    const params = useParams();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(Boolean(params.id));
    }, [params])

    if (isOpen) {
        return (
            <div className={styles.popup}>
                <div className={styles.popup__content}>
                    <h1>POPUP!</h1>
                </div>
            </div>
        );
    }


    return null;
};

export default Popup;
