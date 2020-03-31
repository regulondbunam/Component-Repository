import React, {Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css';

export default class CheckBoxGrup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkedLabel: this.props.checkedOption
        }
    }

    _onChange = (label) =>{
        this.setState({checkedLabel: label})
        console.log(this.state.checkedLabel)
    }
    render() {
        const {
            dropdown,
            GrupOf,
            name,
            options,
            onSelect,
            styleCheckBox,
            styleGrupBox,
            title
        } = this.props
        return (
        <React.Fragment>
            {options.map((op)=>
            <GrupOf key={op} name={name} label={op} checked={this.state.checkedLabel === op } onChange={this._onChange} ></GrupOf>
            )}
        </React.Fragment>)
    }

}

CheckBoxGrup.propTypes = {
    checkedOption: PropTypes.string,
    dropdown: PropTypes.bool,
    GrupOf: PropTypes.elementType,
    name: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    styleGrupBox: PropTypes.object,
    title: PropTypes.string
};

CheckBoxGrup.defaultProps = {
    checkedOption: ""
};