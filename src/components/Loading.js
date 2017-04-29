import React from 'react';

import styles from './Loading.scss';
import upropeIcon from '../img/logo.svg';


export default () => (
    <div className={styles.loading}>
        <img src={upropeIcon} alt="loading icon" className={styles.loadingIcon} />
        <div className={styles.loadingText}>Loading...</div>
    </div>
);
