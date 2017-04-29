/* eslint-disable react/prop-types */ // #dealwithit
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PartsList from './PartsList';
import styles from './LcaForm.scss';


const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={styles.fieldContainer} >
        <input {...input} type={type} placeholder={label} />
        {touched && error && <span>{error}</span>}
    </div>
);


const LcaForm = ({ lca, handleSubmit, submitting }) => {
    const carbonCostPerUnit = (lca && lca.carbonCostPerUnit) || 0;
    const parts = (lca && lca.parts) || [];
    return (
        <form onSubmit={handleSubmit}>
            <h1>LCA for <Field name="name" type="text" component={renderField} label="Name" /> (
                 {lca.unit}
            )</h1>
            <div>source: <Field name="source" type="text" component={renderField} label="Source" /></div>
            <div>
                <Field name="amazonId" type="text" component={renderField} label="Amazon ID" />
                <a href={`https://amazon.com/${lca.amazonId}`}>
                    View on Amazon
                </a>
            </div>

            <span>
                {carbonCostPerUnit} g CO2e per <Field name="unit" type="text" component={renderField} label="Unit" />
            </span>
            <PartsList parts={parts} />
            <div>
                <button type="submit" disabled={submitting}>Save</button>
            </div>
        </form>
    );
};

const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.parts || !values.parts.length) {
        errors.parts = { _error: 'At least one part must be entered' };
    }
    return errors;
};

export default reduxForm({
    form: 'lca',     // a unique identifier for this form
    validate,
    onSubmit: () => {},
})(LcaForm);
