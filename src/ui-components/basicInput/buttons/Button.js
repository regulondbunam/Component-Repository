/**
# Component (user guide)

# Component name 
	
	[Button]
	
## Description  
	
	[This component presents the functionality of a button]

## Category   
	
	[Visual]  

## Live demo 
	
	[-]


## Installation 

	[-]

## Usage 
	
	[
         <Button label="Button" onClick={actionFunction}/>
    ]

## Props 

  


## Exception

    __Warning__

    button has no activity, use Prop "onClick" to add Activity with a function


## License

	[MIT]

## Author 
	
	[CCG-UNAM-RegulonDB]

**/


/**
# Component (technical guide)

## Component Type 

	[Stateless functional component]

## Dependencies

	[React,PropTypes, Button.module.css]

## States
	

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
		* __Param - __ __[Name]__
		Description

	__Return:__  
		* __Type - __ __[Name]__
        Description (if necessary)
    

    ## [selectStyle]

	__Description:__  
	[this function gives the style that the button has to show based on the parameters]

	__Usage:__

		```javascript

		selectStyle(accent,disabled)

		```
	__Scope: __

	[Scope details]

	__Input Parameter:__  
		* __Param - __ __[accent]__
        Description this is a button prop accent
        * __Param - __ __[disabled]__
		Description this is a button prop disabled

	__Return:__  
		* __Type - __ __[StyleClass]__
		Description the class name requiere of css
**/


import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Buttons.module.css'


const Button = ({
    accent,
    children,
    disabled,
    id,
    label,
    style,
    onClick
}) => {

function OnClick(event) {
        if (!disabled) {
            onClick(event);
        }
    };

    return (
        <button id={id} className={selectStyle(accent, disabled)} onClick={OnClick} style={style}>
            {label}
            {children}
        </button>
    );
}

export default Button;

function selectStyle(accent, disabled) {
    let styleClass = Styles.button
    accent
        ? styleClass += " " + Styles.accent
        : styleClass += " " + Styles.default
    disabled
        ? styleClass += " " + Styles.disabled
        : styleClass += " "

    return styleClass
}

function noAction() {
    console.warn('Button has no activity, use Prop "onClick" to add Activity with a function n.n')
}


Button.propTypes = {
    accent: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

Button.defaultProps = {
    accent: false,
    disabled: false,
    label: "",
    onClick: noAction,
    style: {}
};

