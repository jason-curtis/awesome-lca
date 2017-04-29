import React, { PropTypes } from 'react';

import partProp from '../propTypes/part';
import styles from './PartsList.scss';


const PartsList = ({ parts }) => {
    const partsElements = parts.map(({
                                         id,
                                         name,
                                         quantity,
                                         unit,
                                         carbonCostPerUnit
    }, i) => (
// eslint-disable-next-line react/no-array-index-key
        <tr key={`${id}-${quantity}-${i}`}>
            <td>{name}</td>
            <td>{quantity}{unit}</td>
            <td>{carbonCostPerUnit * quantity}</td>
        </tr>
    ));

    return (
        <table className={styles.partsListTable}>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Quantity</th>
                    <th>Cost (lb. CO2e)</th>
                </tr>
            </thead>
            <tbody>
                {partsElements}
                <tr>
                    <td>
                        <input placeholder="+ add item" />
                    </td>
                    <td>
                        <input placeholder="quantity" />g
                    </td>
                    <td>
                        <button type="submit">Calculate</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};


PartsList.propTypes = {
    parts: PropTypes.arrayOf(partProp).isRequired,
};

export default PartsList;
