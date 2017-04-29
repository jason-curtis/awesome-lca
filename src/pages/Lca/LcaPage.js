import React, { PropTypes } from 'react';

import lcaPropType from '../../propTypes/lca';
import Loading from '../../components/Loading';


const LcaPage = ({
    loading,
    lca: {
        name,
        amazonUrl,
        quantity,
        unit,
        source,
        inputs,
    }
}) => (
        loading ? <Loading /> : (<div>
            <h1>LCA for {name} ({quantity} {unit})</h1>
            <div>source: {source}</div>
            <div><a href={`https://amazon.com/${amazonUrl}`}>
                View product on Amazon
            </a></div>
            {JSON.stringify(inputs)}
        </div>)
    );


LcaPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    lca: lcaPropType,
};

LcaPage.defaultProps = {
    lca: {}
};

export default LcaPage;
