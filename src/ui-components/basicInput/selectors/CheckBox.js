import React from 'react'
import PropTypes from 'prop-types';
import './Style.css';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.checked};
    
        this._handleOnChange = this._handleOnChange.bind(this);
      }

    _handleOnChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onChange(this.props.label,event.target.checked);
    }

    render() {
        const {
            label,
            checked
        } = this.props
        return (
            <label className="checkLabel">
                <div className="checkText">{label}</div>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={this._handleOnChange}
                    value={this.state.value}
                />
                <span className="checkmark"></span>
            </label>
        )
    }
}

Checkbox.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};

Checkbox.defaultProps = {
    label: 'checkBox',
    disabled: false,
    onChange: noAction
};

function noAction(mod) {
    console.error('The CheckBox State is undefined')
}