/**
# Component (user guide)

# Component name 

[CheckBox --v1.0]
	
## Description  
[This component allows the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options]

## Category   
[Visual, funcional]  

## Live demo 
[-]

## Installation 
[---]

## Usage 

[
to make use of this component you can use a CheckBoxGrup or use it only with the label 

<CheckBox label={""} onChange={function}/>


]

## Props 

| Prop     | Type     | Default    | Description                                                  |
| -------- | -------- | ---------- | ------------------------------------------------------------ |
| disabled | boolean  | true       | Enables or disables the checkbox                             |
| isCheck  | boolean  | false      | check or uncheck checkbox                                    |
| value    | string   | ""         | value of the checkBox                                        |
| label    | String   | "checkBox" | CheckBox Label                                               |
| onChange | function |            | receives a function to be executed when the checkBox is checked |



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
[Hook]

## Dependencies
[React, PropTypes, Style]

## States

| State  | type    | default | description                                  |
| ------ | ------- | ------- | -------------------------------------------- |
| cheked | boolean | false   | Mention the selection status of the checkbox |

**/
