import React from 'react';

import styles from './NotFound.scss';
import logo from '../img/logo.svg';


export default () => (
    <div className={styles.loading}>
        <img src={logo} alt="flickering icon" />
        <div>
            <h1>
                There is nothing here!
            </h1>
            <div>
                 Please double-check your URL.
            </div>
        </div>
    </div>
);
