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
                    name: this.itemAdd.value,
                    carbonCostPerUnit: 100,
                    quantity: Number(this.itemQuantity.value),
                    unit: 'oz',
                    source: 'openDB',
                }])
            }
        );
        this.itemAdd.value = '';
        this.itemQuantity.value = '';
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
                        <th>Cost (g CO2e)</th>
                    </tr>
                </thead>
                <tbody>
                    {partsElements}
                    <tr>
                        <td>
                            <input placeholder="+ add item" ref={(ref) => { this.itemAdd = ref; }} />
                        </td>
                        <td>
                            <input placeholder="quantity" ref={(ref) => { this.itemQuantity = ref; }} />
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
