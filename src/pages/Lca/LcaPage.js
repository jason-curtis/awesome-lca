import React, { PropTypes } from 'react';

import lcaPropType from '../../propTypes/lca';
import Loading from '../../components/Loading';
import LcaForm from '../../components/LcaForm';


const LcaPage = ({
    loading,
    lca
}) => {
    const {
        name,
        amazonId,
        quantity,
        unit,
        source,
        parts,
    } = lca;

    return (
            loading ? <Loading /> : (<div>
                <LcaForm initialValues={lca} lca={lca} />
            </div>)
    );
};


LcaPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    lca: lcaPropType,
};

LcaPage.defaultProps = {
    lca: {}
};

export default LcaPage;
