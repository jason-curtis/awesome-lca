import React, { PropTypes } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import styles from './CompsLoadingHandler.scss';


const CompsLoadingHandler = ({ compExists, loading, children }) => {
    if (loading) {
        return (<div className={styles.placeholder}>
            <Loading />
        </div>);
    } else if (!compExists) {
        return (<div className={styles.placeholder}>
            <NotFound />
        </div>);
    }
    return (
        <div>
            {children}
        </div>
    );
};


CompsLoadingHandler.propTypes = {
    compExists: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default CompsLoadingHandler;
