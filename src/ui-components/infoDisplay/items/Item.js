/**
# Component (user guide)

# Component name 
	
	[Item]
	
## Description  
	
	[---]

## Category   
	
	[Visual]  

## Live demo 
	
	[---]


## Installation 

	[---]

## Usage 
	
	[---]

## Props 

| Prop   | type    | default   | description |
| ------ | ------- | --------- | ----------- |
| align  | string  | "left"    |             |
| data   | string  | ""        |             |
| height | numeric | 44        |             |
| style  | object  | {}        |             |
| type   | string  | "default" |             |
| width  | numeric | 400       |             |



## Exception
	__Category (Error, Warning or Message)__  
	Description of the exception (if necessary)

## License

	[MIT]

## Author 
	
	[CCG-UNAM-RegulonDB]

**/


/**
# Component (technical guide)

## Component Type 

	[pure]

## Dependencies

	[---]

## States
	
	| Property | Value | Desctiption |
	| -------- | ----- | ----------- |
	|          |       |             |
	

# Function description

	## [function name]

	__Description:__  
	[Description of the function]

	__Usage:__

		```javascript

		&function(Parameters, if any);

		```
	__Scope: __

	[Scope details]

	__Input Parameter:__  
		* __Param - __ __[Name]__
		Description

	__Return:__  
		* __Type - __ __[Name]__
		Description (if necessary)
**/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

// ["clear", "accent", "accent_ligth", "dark"]
const models = {
	clear: "#ffffff",
	accent: "#72a7c7",
	accent_ligth: "#d5e2ea",
	dark:"#d5d5d7"
}

export default class Item extends Component {

	setModel(key){
		let color = models[key]
		if(color!==undefined){
			return color
		}
		return(models.clear)
	}

    render() {
        const {
            align,
			data,
			height,
			model,
    		style,
    		width,
		} = this.props;

		const masterStyle = Object.assign(
			{height: height,width: width,backgroundColor: this.setModel(model)},
			style
			) 

        return (
            <div className="item" style={masterStyle}>
				{data}{align}
			</div>
        )

    }
}

Item.propTypes = {
    align: PropTypes.string,
	data: PropTypes.string,
	height: PropTypes.number,
	model: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.number,
};

Item.defaultProps = {
    align: "left",
	data: "hola",
	height: 44,
	model: "clear",
    style: {},
    width: 400,
};