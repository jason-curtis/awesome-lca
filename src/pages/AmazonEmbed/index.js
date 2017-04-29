import { connect } from 'react-redux';

import AmazonEmbedPage from './AmazonEmbedPage';

const mapStateToProps = (state, ownProps) => {
    const { amazonId } = ownProps.params;

    return {
        loading: false, // well, technically it's true, but TODO
        amazonId
    };
};

const WrappedLcaPage = connect(mapStateToProps)(AmazonEmbedPage);

export default WrappedLcaPage;
