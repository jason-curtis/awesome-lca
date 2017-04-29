import React, { PropTypes } from 'react';

import partProp from '../propTypes/part';

const PartsList = ({ parts }) => (
    <div>{JSON.stringify(parts)}</div>
);


PartsList.propTypes = {
    parts: PropTypes.arrayOf(partProp).isRequired,
};

export default PartsList;
