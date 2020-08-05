/**
# Component (user guide)
# Component name 
[DropDown --v1.0]
## Description  
[This component allows us to display several options, being on top of the component a vertical palette with options is shown, allowing to click one of these.]
## Category   
[Visual, Functional Component]  
## Live demo 
[-]
## Installation 
[-]
## Usage 
 [

 <DropDown arrayOptions={options} onSelect={dropSelect}/>

 ]

## Props 

| props        | type     | default     | description                                                  |
| ------------ | -------- | ----------- | ------------------------------------------------------------ |
| accent       | boolean  | false       | enables accent button design                                 |
| arrayOptions | array    | []          | arrangement of display options                               |
| className    | string   |             | Class Name of item dropdown                                  |
| disabled     | boolean  | false       | disable the dropdown                                         |
| id           | string   |             | id to html document                                          |
| label        | string   | DropDown    | Dropdown label                                               |
| style        | object   | {}          |                                                              |
| isDisplay    | boolean  | false       | enables the component to be displayed at startup             |
| onSelect     | function | (value)=>{} | value is an object that contains the attributes index and option selected |

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
[Functional Component, hook]
## Dependencies
 [React, { Component },PropTypes, RegulonDB-uicomponents Button]
## States

| state   | type    | default     | description                 |
| ------- | ------- | ----------- | --------------------------- |
| display | boolean | false       | dropdown box display status |
| option  | object  | {}          | status of selected option   |
| \_label  | string  | PROP[label] | dropdown label status       |


## Function description

## [UseEffect]

__Description:__  
[this function updates the status of the chosen option]

**/
