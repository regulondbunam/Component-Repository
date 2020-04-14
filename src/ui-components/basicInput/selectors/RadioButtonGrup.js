import React, {Component } from 'react'
import PropTypes from 'prop-types'
import RadioButton from './RadioButton'
import './Style.css';

export default class RadioButtonGrup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkedLabel: this.props.checkedOption
        }
    }

    _onChange = (label) =>{
        this.setState({checkedLabel: label})
    }

    render() {
        const {
            /*dropdown,*/
            name,
            options,
            /*styleGrupBox,*/
            title
        } = this.props
        return (
        <React.Fragment>
            {title}
            {options.map((op)=>
            <RadioButton key={op} name={name} label={op} checked={this.state.checkedLabel === op } onChange={this._onChange} />
            )}
        </React.Fragment>)
    }

}

function noAction(){

}

RadioButtonGrup.propTypes = {
    dropdown: PropTypes.bool,
    name: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    styleGrupBox: PropTypes.object,
    title: PropTypes.string
};

RadioButtonGrup.defaultProps = {
    dropdown: false,
    name: "",
    options: [],
    onChange: noAction,
    styleGrupBox: {},
    title: ""
};