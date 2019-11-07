import React from 'react'
import PropTypes from 'prop-types';
import './Style.css';

export default class RadioButton extends React.Component {

    _onChange = () => {
        this.props.onChange(this.props.id)
    }

    render() {
       
        const {
            label,
            name,
            checked
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
    checked: PropTypes.bool,
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    name: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

RadioButton.defaultProps = {
    label: 'Radio Button',
    name: 'default',
    disabled: false,
    onChange: noAction
};


function noAction(mod) {
    switch (mod) {
        case 1:
            console.log('RadioButton disabled')
            break
                   case 2:
            //console.log('RadioButton is pressed')
            break
        default:
            console.error('The RadioButton has no onchange function defined')
    }

}