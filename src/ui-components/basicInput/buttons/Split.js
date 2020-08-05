/**
# Component (user guide)

# Component name 
	
	[This component is a button with the ability to change the call to action, is composed of two parts the main button and a bullet that allows you to display the arrayOptions to exchange the button.  ]
### Version 1.0
## Description  
	
	[-]

## Category   
	
	[Visual]  

## Live demo 
	
	[-]


## Installation 

	[-]

## Usage 
	
	[example: <Split arrayOptions={arrayOptions} onClick={action}></Split> ]

## Props 

  | prop name     | Type     | Default                                              | Description                                 |
| ------------- | -------- | ---------------------------------------------------- | ------------------------------------------- |
| disabled        | boolean  | true                                                 | enables or disables the button              |
| expand        | boolean  | false                                                | habilita el cuadro de seleccion de opciones |
| label         | string   | "button"                                             | Button label                                |
| arrayOptions       | array    | []                                                   |                                             |
| onClick       | function | noAction                                             |                                             |
| styleButton   | object   | {float: "left", marginRight: "2px"}                  |                                             |
| styleDropDown | object   | {width: "auto", paddingLeft: "0", paddingRight: "0"} |                                             |



## Exception
	__Category (Error, Warning or Message)__  
	Description of the exception (if necessary)

## License

	[---]

## Author 
	
	[CCG-UNAM-RegulonDB]

**/


/**
# Component (technical guide)

## Component Type 

	[stateless]

## Dependencies

	[React { Component },PropTypes, RegulonDB-uicomponents {Button, DropDown}]

## States
	
	| State  | Value | Description |
    | ------ | ----- | ----------- |
    | label  | ""    |             |
    | expand | false |             |
	

# Function description

	## [noAction]

	__Description:__  
	[this function sends the console a warning that the button does not have a designated action]

	__Usage:__

		```javascript

		noAction;

		```
	__Scope: __

	[Scope details]

	__Input Parameter:__  
		* __Param - __ __[Value]__
		Description

	__Return:__  
		* __Type - __ __[Name]__
        Description (if necessary)
**/


import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import DropDown from './DropDown'
//import Styles from './Buttons.module.css'


const styleDropDown = {
    width: "auto",
    paddingLeft: "0",
    paddingRight: "0"
    
}
const styleButton = {
    float: "left",
    marginRight: "2px"
}


export default class Split extends Component {

    constructor(props) {
        super(props)
        this.state = {
            label: this.props.label,
            expand: this.props.expand,
            value: {}
        }
    }

    selected = (value) =>{
        this.setState({label: value.option, value: value})
        
    }

    onClick = () => {
        if(!this.props.disabled){
            this.props.onClick(this.state.value);
        }
    };


    render() {
        const {
            disabled,
            arrayOptions,
            styleButton,
            styleDropDown
            
        } = this.props;
        const {
            label,
            expand
        } = this.state
            return (
                <React.Fragment>
                    <Button label={label} onClick={this.onClick} style={styleButton} disabled={disabled}/>
                    <DropDown label={""} disabled={disabled} arrayOptions={arrayOptions} style={styleDropDown} expand={expand} labelUpdate={false} onSelect={this.selected}/>
                </React.Fragment>
            )
    }
}

function noAction() {
    console.warn('Button has no activity')
}

Split.propTypes = {
    disabled: PropTypes.bool,
    expand: PropTypes.bool,
    label: PropTypes.string,
    arrayOptions: PropTypes.array,
    onClick: PropTypes.func,
    styleButton: PropTypes.object,
    styleDropDown: PropTypes.object
};

Split.defaultProps = {
    disabled:  false,
    expand: false,
    label: "select option =>",
    arrayOptions: [],
    onClick: noAction,
    styleButton: styleButton,
    styleDropDown: styleDropDown
};