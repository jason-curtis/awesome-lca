import { connect } from 'react-redux';

import AmazonEmbedPage from './AmazonEmbedPage';

const mapStateToProps = state => (
    {
        loading: !state.lca.id,
        lca: state.lca,
    }
);

const WrappedAmazonEmbedPage = connect(mapStateToProps)(AmazonEmbedPage);

export default WrappedAmazonEmbedPage;
