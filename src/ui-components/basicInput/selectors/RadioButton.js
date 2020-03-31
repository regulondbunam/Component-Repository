import React from 'react'
import PropTypes from 'prop-types';
import './Style.css';

export default class RadioButton extends React.Component {

    _onChange = (event) => {
        this.props.onChange(this.props.label)
    }

    render() {
       
        const {
            label,
            name,
            checked,
        } = this.props
        return (
            <label 
                className="checkLabel"
            >
            {label}
            <input
                type="radio"
                checked={checked}
                name={name}
                onChange={this._onChange}
            />
            <span className="r-checkmark"></span>
            </label>
        )
    }
}

RadioButton.propTypes = {
    active: PropTypes.bool,
    checked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func
};

RadioButton.defaultProps = {
    active: true,
    checked: false,
    label: 'Radio Button',
    name: 'default',
    onChange: noAction
};


function noAction() {
    console.warn('The RadioButton has no onchange function defined')
}