import React, { FC } from 'react';
import styles from './Popup.module.scss';
import {useParams} from "react-router-dom";

const Popup: FC = () => {
    const params = useParams();

    if (params?.id) {
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
