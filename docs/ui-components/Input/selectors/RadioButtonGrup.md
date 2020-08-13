/**
# Component (user guide)

# Component name 

	[CheckBox]

## Description  

	[This component allows you to group the radiobuttons ]

## Category   

	[Structural]  

## Live demo 

	[--]


## Installation 

	[--]

## Usage 

	[example: <RadioButtonGrup name="grupOne" options={op} checkedOption={op[0]}/> ]

## Props 

| Prop          | Type     | Default    | Description                                                  |
| ------------- | -------- | ---------- | ------------------------------------------------------------ |
| checkedOption | string   | ""         | select initial option                                        |
| dropdown*     | bolean   | false      | Allows the group to expand or collapse                       |
| name          | string   | "default"  | defines radio button groups with the name property (radio buttons with the same name belong to the same group).The name attribute is used to identify form data after it has been submitted to the server, or to reference form data |
| options       | array    | []         | Arrangement of options to be displayed                       |
| onChange      | function | noAction() | receives a function to be executed when the radio button is checked |
| Style         | Object   | {}         | Style of radiobutton gruo box                                |
| tittle        | string   | ""         | title of radiobutton grup                                    |


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

	[stateful]

## Dependencies

	[React, Proptypes, Regulondb-uicomponents radiobutton]

## States

	|    Property     |  Value  |     Desctiption    |
	| --------------- | ------- | ------------------ |
	|  checkedLabel   |   ""    |  selected options  |


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