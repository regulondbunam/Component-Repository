/**
# Component (user guide)

# Component name 
	
	[DropDown]
### Version 1.0
## Description  
	
	[This component allows us to display several options, being on top of the component a vertical palette with options is shown, allowing to click one of these.]

## Category   
	
	[Visual]  

## Live demo 
	
	[-]


## Installation 

	[-]

## Usage 
	
	[example: <DropDown content={options} onSelect={dropSelect}/> ]

## Props 

  | prop name   | Type     | Default                                                  | Description                                                  |
| ----------- | -------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| active      | boolean  | true                                                     | enables or disables the button                               |
| content     | array    | []                                                       | receives an array type variable containing the options to be displayed in the dropdown |
| label       | string   | "DropDown"                                               | "dropdown label"                                             |
| labelUpdate | boolean  | true                                                     | enables the update of the dropdown label when an option is selected |
| style       | object   | {width: "auto", paddingLeft: "5px", paddingRight: "5px"} | style of dropdown                                            |
| onSelect    | function | noAction(value)                                          | receives the function that will be executed when an option is selected, the function revives the 'value' parameter containing the selected array element |



## Exception
	__Category (Error, Warning or Message)__  
	Description of the exception (if necessary)

## License

	[License details]

## Author 
	
	[CCG-UNAM-RegulonDB]

**/


/**
# Component (technical guide)

## Component Type 

	[stateless]

## Dependencies

	[React, { Component },PropTypes, RegulonDB-uicomponents Button]

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

import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Styles from './Buttons.module.css'

const arrowDown = "keyboard_arrow_down"
const arrowUp = "keyboard_arrow_up"

const DropDown = ({
    arrayOptions = [],
    disabled = false,
    isLabelUpdate = false,
    label = "DropDown",
    style = {},
    isDisplay = false,
    onSelect = ()=>{}
}) => {
    const [display, setDisplay] = useState(isDisplay)
    const [option, setOption] = useState({})
    const [_label, setLabel] = useState(label)

    useEffect(()=>{
        if(Object.entries(option).length !== 0 ){
            onSelect(option)
            setOption({})
        }
    },[option, onSelect])
    return (
        <div>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
            <Button onClick={()=>{setDisplay(!display)}} disabled={disabled} style={style}>
                {_label}
                <i className="material-icons">
                    {
                        display
                            ? arrowUp
                            : arrowDown
                    }
                </i>
            </Button>
            {
                display
                ? <div className={Styles.dropBox}>
                    {
                        arrayOptions.map((value,index) =>
                            <Button id={value} key={value} style={{ marginBottom: "2px", width: "100%" }} 
                            onClick={()=>{
                                setOption({"index": index, "option":value});
                                setDisplay(false);
                                if(isLabelUpdate){setLabel(value)}
                            }}
                            >
                                {value}
                            </Button>
                        )}
                </div>
                : <></>
            }
        </div>
    );
}

export default DropDown;

DropDown.propTypes = {
    arrayOptions: PropTypes.array,
    disabled: PropTypes.bool,
    isDisplay: PropTypes.bool,
    islabelUpdate: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    style: PropTypes.object
};

