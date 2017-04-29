import { PropTypes } from 'react';

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amazonId: PropTypes.string,
    carbonCostPerUnit: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
});
