import React, { PropTypes } from 'react';

import Loading from '../../components/Loading';
import lcaPropType from '../../propTypes/lca';


const AmazonEmbedPage = ({
    loading,
    lca
}) => (
        loading ? <Loading /> : (<div>
            <h1>fancy embed thing for ASID={lca.amazonId}</h1>
            Did you know you could buy this product on <a href={`https://smile.amazon.com/dp/${lca.amazonId}`}>
                Amazon Smile
            </a> and donate to a cause?
            {JSON.stringify(lca)}
        </div>)
    );


AmazonEmbedPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    lca: lcaPropType,
};

AmazonEmbedPage.defaultProps = {
    lca: {}
};

export default AmazonEmbedPage;
