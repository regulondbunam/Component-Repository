/**
# Component (user guide)

# Component name 
	
	[TextBox]
	
## Description  
	
	[Component allows the entry of a single line of text]

## Category   
	
	[Visual]  

## Live demo 
	
	[---]


## Installation 

	[---]

## Usage 
	
	[example: <TextBox /> ]

## Props 

| Prop         | Type     | Default     | Description |
| ------------ | -------- | ----------- | ----------- |
| disabled     | bolean   | false       |             |
| onChangeText | function | noAction    |             |
| placeholder  | string   | "type here" |             |
| value        | string   | ""          |             |



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

	[stateless]

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
import React from 'react'
import PropTypes from 'prop-types';
import './Style.css';

export default class TextBox extends React.Component {
    state = {
        keyword: this.props.value
    }

    static getDerivedStateFromProps(props, state) {
        return {
            keyword: props.value
        }
    }

    _inputChangedHandler(event) {
        this.setState({ keyword: event.target.value })
        this.props.onChangeText(event.target.value)
    }

    render() {
        const {
            placeholder
        } = this.props
        return (
            <input
                type="text"
                className='textBox'
                placeholder={placeholder}
                value={this.state.keyword}
                onChange={(event) => this._inputChangedHandler(event)}
            >
            </input>
        )
    }
}

TextBox.propTypes = {
    disabled: PropTypes.bool,
	onChangeText: PropTypes.func,
	placeholder: PropTypes.string
}

TextBox.defaultProps = {
    disabled: false,
	onChangeText: noAction,
	placeholder: "type here"
};

function noAction(mod) {
    console.error('The AreaText State is undefined')
}