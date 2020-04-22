/**
# Component (user guide)

# Component name 
	
	[Table]
	
## Description  
	
	[---]

## Category   
	
	[Visual/Structural]  

## Live demo 
	
	[---]


## Installation 

	[---]

## Usage 
	
	[---]

## Props 





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
import Item from '../items/Item'
import './Style.css';

const deployments = {
	default: 'd',
	vertical: 'v',
	horizontal: 'h',
	verticalR: 'vr'
}

export default class Table extends Component {

	setup_deployment(dataType, deployment_type) {
		let displayType = deployments[deployment_type]
		if (displayType !== undefined) {
			if (dataType) {
				switch (displayType) {
					case 'd':
					case 'h':
						return 'h'
					case 'v':
					case 'vr':
						return 'vr'
					default:
						return 'h'
				}
			} else {
				switch (displayType) {
					case 'd':
					case 'vr':
					case 'v':
						return 'v'
					case 'h':
						return 'h'
					default:
						return 'v'
				}
			}
		} else {
			console.error("prop deployment_type: " + deployment_type + " invalid")
		}
		return 'v'
	}

	getKeys = function () {
		if(Array.isArray(this.props.data)){
			return Object.keys(this.props.data[0])
		}else{
			return Object.keys(this.props.data)
		}
	}

	getHeader = function () {
		var keys = this.getKeys();
		return keys.map((key, index) => {
			return <th key={key}>{key.toUpperCase()}</th>
		})
	}

	getRowsData = function () {
		var items = this.props.data;
		console.log(items)
		var keys = this.getKeys();
		return items.map((row, index) => {
			return <tr key={index}><RenderRow key={index} data={row} keys={keys} /></tr>
		})
	}

	render() {
		const {
			data,
			deployment_type,
			name
		} = this.props
		const displayType = this.setup_deployment(Array.isArray(data), deployment_type)
		const display = displayVertical(this.getHeader(), this.getRowsData())
		return (
			<React.Fragment>
				{display}
			</React.Fragment>
		)

	}
}

const RenderRow = (props) => {
	return props.keys.map((key, index) => {
		return <td key={props.data[key]}>{props.data[key]}</td>
	})
}

function displayVertical(header,rowsData) {
	return (
		<div>
			<table>
				<thead>
					<tr>{header}</tr>
				</thead>
				<tbody>
					{rowsData}
				</tbody>
			</table>
		</div>
	)
}
function displayHorizontal(data) {

}
function displayVerticalR(data) { }


Table.propTypes = {
	columnStyle: PropTypes.object,
	data: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
	]),
	deployment_type: PropTypes.string,
	headStyle: PropTypes.object,
	name: PropTypes.string,
	rowStyle: PropTypes.object,
	type: PropTypes.string
}

Table.defaultProps = {
	columnStyle: {},
	data: {},
	deployment_type: "default",
	headStyle: {},
	name: "",
	rowStyle: {},
	type: "default"
}