import React, { PropTypes } from 'react';

import partProp from '../propTypes/part';
import styles from './PartsList.scss';


class PartsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addlParts: [],
        };
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd() {
        this.setState(
            {
                addlParts: this.state.addlParts.concat([{
                    id: '123dasf3r2',
                    name: 'milk',
                    carbonCostPerUnit: 100,
                    quantity: 4,
                    unit: 'oz',
                    source: 'openDB',
                }])
            }
        );
    }
    render() {
        const allParts = this.props.parts.concat(this.state.addlParts);
        const partsElements = allParts.map(({
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
                            <input placeholder="quantity" />
                        </td>
                        <td>
                            <button type="submit" onClick={this.handleAdd}>Calculate</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

PartsList.propTypes = {
    parts: PropTypes.arrayOf(partProp).isRequired,
};

export default PartsList;
