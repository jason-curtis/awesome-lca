import { PropTypes } from 'react';

export default PropTypes.shape({
    name: PropTypes.string.isRequired,
    carbonCostPerUnit: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
});
