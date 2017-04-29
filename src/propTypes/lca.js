import { PropTypes } from 'react';
import inputPropType from './input';

export default PropTypes.shape({
    name: PropTypes.string.isRequired,
    amazonUrl: PropTypes.string,
    unit: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    source: PropTypes.string.isRequired,
    lcaId: PropTypes.string,
    inputs: PropTypes.arrayOf(inputPropType),
});
