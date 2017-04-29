import { connect } from 'react-redux';

import CompsLoadingHandler from './CompsLoadingHandler';

const mapStateToProps = (state, ownProps) => {
    const compExists = typeof state.comps.items[ownProps.params.compSlug] !== 'undefined';
    return ({
        loading: !state.comps.fetched,
        compExists,
    });
};

const WrappedCompsLoadingHandler = connect(mapStateToProps)(CompsLoadingHandler);

export default WrappedCompsLoadingHandler;
