import { connect } from 'react-redux';

import LcaPage from './LcaPage';

const mapStateToProps = (state, ownProps) => {
    const { lcaId } = ownProps.params;
    const lca = state.lca[lcaId];

    if (
        typeof lca === 'undefined' ||
            lca.loading
    ) {
        return {
            loading: true,
            lca,
        };
    }

    return {
        loading: false,
        lca,
    };
};

const WrappedLcaPage = connect(mapStateToProps)(LcaPage);

export default WrappedLcaPage;
