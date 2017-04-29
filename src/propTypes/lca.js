import { PropTypes } from 'react';
import partsPropType from './part';

export default PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    amazonId: PropTypes.string,
    unit: PropTypes.string,
    source: PropTypes.string,
    carbonCostPerUnit: PropTypes.number,
    parts: PropTypes.arrayOf(partsPropType),
});
