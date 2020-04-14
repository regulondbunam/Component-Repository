import React, {Component } from 'react'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'
import './Style.css';

export default class CheckBoxGrup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkedLabel: this.props.checkedOptions,
            value: ""
        }
        this._onChange = this._onChange.bind(this);
    }

    _onChange = (label,checked) =>{
        let arr = this.state.checkedLabel
        if(checked){
            arr[this.state.checkedLabel.length] = label
            this.setState({checkedLabel: arr})
        }else{
            let indx = arr.indexOf(label)
            //console.log(indx)
            arr.splice(indx,1)
            this.setState({checkedLabel: arr})
        }
        
    }

    valueCheckedOptions(chekedState,option){
        let optionCheck = chekedState.find(o => o === option)
        if(optionCheck !== undefined){
            return true
        } else{
            return false
        }
    }

    render() {
        const {
            /*dropdown,*/
            name,
            options,
            /*style,*/
            title
        } = this.props
        return (
        <React.Fragment>
            {title}
            {options.map((op)=>
            
            <CheckBox key={op} value={this.state.value} name={name} label={op} checked={this.valueCheckedOptions(this.state.checkedLabel,op)} onChange={this._onChange} />
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
    style: PropTypes.object,
    title: PropTypes.string
};

CheckBoxGrup.defaultProps = {
    checkedOptions: []
};