

import React, {Component, useState } from 'react'
import PropTypes from 'prop-types'
import CheckBox from './CheckBox'

const warnMenssage = "CheckboxGrup does not have an added function for the change in prop \"onChange\""

const CheckBoxGrup = ({
    arrayOptions = [],
    arraySelectOptions = [],
    arrayDisabledOptions = [],
    title = "",
    onChange = () => {console.warn(warnMenssage)}
}) => {

    const [selectOptions, setOption] = useState(arraySelectOptions)

    const onChangeSelection = (value,options) =>{
        //console.log(selectOptions)
        if(isSelect(value)){
            const indx = options.indexOf(value)
            options.splice(indx,1)
            setOption(options)
        }else{
            options.push(value)
            setOption(options)
        }
        onChange(selectOptions)
        //console.log(selectOptions)
    }

    const isSelect = (value) => {
        if(selectOptions.find(element => element === value)){
            return true
        }
        return false
    }

    const isDisable = (value) => {
        if(arrayDisabledOptions.find(element => element === value)){
            return true
        }
        return false
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>{title}</th>
                </tr>
            </thead>
            <tbody>
                {
                    arrayOptions.map((option)=>{
                        return(
                            <tr key={option}>
                                <td>
                                    <CheckBox 
                                    label={option} 
                                    value={option}
                                    disabled={isDisable(option)}
                                    isCheck={isSelect(option)}
                                    onChange={()=>{
                                        onChangeSelection(option,selectOptions);
                                    }}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
 
export default CheckBoxGrup;


class CheckBoxGrupA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checkedLabel: this.props.checkedOptions,
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
            name,
            op,
            options,
            title
        } = this.props
        return (
        <React.Fragment>
            {title}
            {options.map((option)=>
            <CheckBox key={option} value={this.state.value} name={name} label={op} checked={this.valueCheckedOptions(this.state.checkedLabel,op)} onChange={this._onChange} />
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