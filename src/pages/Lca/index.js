import { connect } from 'react-redux';

import LcaPage from './LcaPage';

const mapStateToProps = state => (
    {
        loading: !state.lca.id,
        lca: state.lca,
    }
);

const WrappedLcaPage = connect(mapStateToProps)(LcaPage);

export default WrappedLcaPage;
