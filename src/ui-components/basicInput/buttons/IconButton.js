/**
# Component (user guide)

# Component name 
	
	[IconButton]
### Version 1.0
## Description  
	
	[This component is a simple button, activated by a click, ]

## Category   
	
	[Visual, Structural]  

## Live demo 
	
	[code to iframe CodeSandbox]


## Installation 

	[example: npm install --save react-awesome-button]

## Usage 
	
	[example: <protvista-tooltip>  </protvista-tooltip> ]

## Props 

  | Prop    | type     | default                   | description                                                  |
| ------- | -------- | ------------------------- | ------------------------------------------------------------ |
| disabled  | boolean  | true                      | enables or disables the button                               |
| icon    | string   | "sentiment_satisfied_alt" | Shows an icon inside the button, you can get the name of the icon using the MATERIAL-ICONS library  https://material.io/resources/icons/?style=baseline |
| style   | object   | {}                        |                                                              |
| onClick | function |                           |                                                              |



## Exception
	__Category (Error, Warning or Message)__  
	Description of the exception (if necessary)

## License

	[-]

## Author 
	
	[CCG-UNAM-RegulonDB]

**/


/**
# Component (technical guide)

## Component Type 

	[pure]

## Dependencies

	[React, { Component },PropTypes]

## States
	
	| Property | Value | Desctiption |
	| -------- | ----- | ----------- |
	|          |       |             |
	

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './Buttons.module.css'

export default class IconButton extends Component {

    handleOnClickLink = (event) => {
        if(!this.props.disabled){
            this.props.onClick(event);
        }
    };

    render() {
        const {
            className,
            disabled,
            icon,
            iconStyle,
            iconClassName = '',
            style,
        } = this.props;
            return (
                <>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet" />
                <button style={style} className={selectStyle(disabled,className)} onClick={this.handleOnClickLink}>
                    <i className={`material-icons ${iconClassName}`} style={iconStyle}>{icon}</i>
                </button>
                </>
            )  

    }
}

function selectStyle (disabled,className) {
    let styleClass = className+" "+Styles.iconButton+" "+Styles.default
    disabled
    ? styleClass += " "+Styles.disabled
    : styleClass += " "
    return styleClass
}

function noAction() {
    console.warn('Button has no activity')
}

IconButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    iconStyle: PropTypes.object,
    iconClassName: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

IconButton.defaultProps = {
    className: "",
    disabled: false,
    icon: "sentiment_satisfied_alt",
    iconStyle: {},
    iconClassName: "",
    onClick: noAction,
    style: {}
};