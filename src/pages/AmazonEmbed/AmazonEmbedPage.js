import React, { PropTypes } from 'react';

import Loading from '../../components/Loading';
import lcaPropType from '../../propTypes/lca';
import styles from './AmazonEmbedPage.scss';

function renderLoading() {
    return (
        <div className={styles.amazonEmbedRoot}>
            <Loading />
        </div>
    );
}

function render(lca) {
    return (
        <div className={styles.amazonEmbedRoot}>
            <h1 className={styles.title}>SuperAwesomeLCAParty</h1>
            <ul>
                <li><b>{'Name: '}</b>{lca.name}</li>
                <li>
                    <b>{`Carbon Cost per  ${lca.unit} : `}</b>
                    {lca.carbonCostPerUnit} CO2e
                </li>
                <li><b>{'Source: '}</b>{lca.source}</li>
                <li><a href={`https://lca.party/lca/${lca.id}`}>Full LCA details</a></li>
            </ul>
        </div>
    );
}

const AmazonEmbedPage = ({
    loading,
    lca
}) => (
        loading ? renderLoading() : render(lca)
    );


AmazonEmbedPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    lca: lcaPropType,
};


AmazonEmbedPage.defaultProps = {
    lca: {}
};

export default AmazonEmbedPage;
