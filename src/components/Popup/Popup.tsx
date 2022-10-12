import React, { FC } from 'react';
import styles from './Popup.module.scss';

const Popup: FC = () => {
  return (
      <div className={styles.popup}>
          <div className={styles.popup__content}>
              <h1>POPUP!</h1>
          </div>
      </div>
  );
};

export default Popup;
