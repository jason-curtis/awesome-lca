import React, { PropTypes } from 'react';

import Loading from '../../components/Loading';


const AmazonEmbedPage = ({
    loading,
    amazonId
}) => (
        loading ? <Loading /> : (<div>
            <h1>fancy embed thing for ASID={amazonId}</h1>
            Did you know you could buy this product on <a href={`https://smile.amazon.com/dp/${amazonId}`}>
                Amazon Smile
            </a> and donate to a cause?
        </div>)
    );


AmazonEmbedPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    amazonId: PropTypes.string.isRequired,
};

AmazonEmbedPage.defaultProps = {
    lca: {}
};

export default AmazonEmbedPage;
