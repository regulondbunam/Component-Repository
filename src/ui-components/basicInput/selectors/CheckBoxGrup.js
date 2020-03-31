import React, {Component } from 'react'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'
import './Style.css';

export default class CheckBoxGrup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkedLabel: this.props.checkedOptions
        }
    }

    _onChange = (label,checked) =>{
        let arr = this.state.checkedLabel
        if(checked){
            arr[this.state.checkedLabel.length] = label
            this.setState({checkedLabel: arr})
        }else{
            let indx = arr.indexOf(label)
            console.log(indx)
            arr.splice(indx,1)
            this.setState({checkedLabel: arr})
        }
        
    }
    render() {
        const {
            dropdown,
            GrupOf,
            name,
            options,
            onSelect,
            styleGrupBox,
            title
        } = this.props
        return (
        <React.Fragment>
            {options.map((op)=>
            <CheckBox key={op} name={name} label={op} checked={this.state.checkedLabel.find(o => o === op) } onChange={this._onChange} />
            )}
        </React.Fragment>)
    }

}

CheckBoxGrup.propTypes = {
    checkedOptions: PropTypes.array,
    dropdown: PropTypes.bool,
    GrupOf: PropTypes.elementType,
    name: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    styleGrupBox: PropTypes.object,
    title: PropTypes.string
};

CheckBoxGrup.defaultProps = {
    checkedOptions: []
};