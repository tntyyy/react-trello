import React, {FC, useEffect, useState} from 'react';
import styles from './InfoPopup.module.scss';
import {useLocation, useNavigate} from "react-router-dom";
import {isMatchUrlEndpoint} from "@/utils/isMatchUrlEndpoint";
import {PopupEndpoints} from "@/types/popups";

const InfoPopup: FC = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        setIsOpen(isMatchUrlEndpoint(pathname, PopupEndpoints.TASK));
    }, [pathname]);

    const handleClosePopup = () => {
        navigate("/");
    }

    if (isOpen) {
        return (
            <div className={styles.popup} onClick={() => handleClosePopup()}>
                <div className={styles.popup__content} onClick={(e) => e.stopPropagation()}>
                    <h1>info</h1>
                </div>
            </div>
        );
    }


    return <></>;
};

export default InfoPopup;
