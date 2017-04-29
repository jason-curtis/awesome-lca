import React, { PropTypes } from 'react';
// import Autocomplete from 'react-autocomplete';

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
                    <td colSpan="3">
                        <input type="text" list="browsers" />
                        {/*<Autocomplete*/}
                            {/*name="newElement"*/}
                            {/*items={['coffee', 'water', 'heating with electric kettle']}*/}
                            {/*value=""*/}
                            {/*inputProps={{*/}
                                {/*placeholder: '+ add ingredient'*/}
                            {/*}}*/}
                            {/*getItemValue={item => (item)}*/}
                            {/*renderItem={item => (<div>{item}</div>)}*/}
                        {/*/>*/}
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
