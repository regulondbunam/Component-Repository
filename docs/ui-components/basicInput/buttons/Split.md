/**

# Component (user guide)
# Component name 
[Split --v1.0 ]

## Description  
[This component is a button with the ability to change the call to action, is composed of two parts the main button and a bullet that allows you to display the arrayOptions to exchange the button. ]

## Category   
[Visual, FunctionalComponent]  

## Live demo 
[-]

## Installation 
[-]

## Usage 
[-]

## Props 

| prop              | type     | default    | description                                      |
| ----------------- | -------- | ---------- | ------------------------------------------------ |
| accent            | boolean  | false      | enables accent button design                     |
| arrayOptions      | array    | []         | arrangement of display options                   |
| buttonClassName   | string   |            | Class Name of item button                        |
| dropdownClassName | string   |            | Class Name of item dropdown                      |
| disabled          | boolean  | false      | disable the button                               |
| label             | string   | Button     | button label                                     |
| isDisplay         | boolean  | false      | enables the component to be displayed at startup |
| styleButton       | object   | {}         |                                                  |
| styleDropdown     | object   | {}         |                                                  |
| onClick           | function | noAction() | insert the function to be executed when pressed  |

## Exception
__Warning__  
​    button has no activity, use Prop "onClick" to add Activity with a function

## License
​    [MIT]

## Author 
​    [CCG-UNAM-RegulonDB]

**/


/**

# Component (technical guide)

## Component Type 
​    [funtional component, class]

## Dependencies
​    [React { Component },PropTypes, RegulonDB-uicomponents {Button, DropDown}]

## States
| state   | type    | default     | description                 |
| ------- | ------- | ----------- | --------------------------- |
| display | boolean | false       | dropdown box display status |
| option  | object  | {}          | status of selected option   |
| \_label | string  | PROP[label] | dropdown label status       |

# Function description

[-]

**/