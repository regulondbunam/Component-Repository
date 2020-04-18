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

export default class Item extends Component {
    render() {
        const {
            align,
			data,
			form,
    		height,
    		style,
    		width,
        } = this.props;
        return (
            <React.Fragment>

			</React.Fragment>
        )

    }
}

Item.propTypes = {
    align: PropTypes.string,
	data: PropTypes.string,
	form: PropTypes.string,
    height: PropTypes.number,
    style: PropTypes.object,
    width: PropTypes.number,
};

Item.defaultProps = {
    align: "left",
	data: "",
	form: "line",
    height: "44",
    style: {},
    width: 400,
};