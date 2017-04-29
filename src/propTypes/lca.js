import { PropTypes } from 'react';
import partsPropType from './part';

export default PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    amazonId: PropTypes.string,
    unit: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    carbonCostPerUnit: PropTypes.number.isRequired,
    parts: PropTypes.arrayOf(partsPropType),
});
