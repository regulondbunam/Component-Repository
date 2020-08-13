/**
# Component (user guide)
# Component name 
[IconButton --v1.0]

## Description  
[This component is a simple button, activated by a click, ]

## Category   
[Visual, Functional Component]  

## Live demo 
[-]

## Installation 
[-]

## Usage 
[-]

## Props 

| Prop          | type    | default                   | description                                                  |
| ------------- | ------- | ------------------------- | ------------------------------------------------------------ |
| className     | string  |                           | Class Name of item button                                    |
| disabled      | boolean | false                     | disable the button                                           |
| icon          | string  | "sentiment_satisfied_alt" | icon name, you can find more icons at Material Icon https://material.io/resources/icons/?style=baseline |
| iconStyle     | object  | {}                        | icon style by object                                         |
| iconClassName | string  |                           | Class Name of item icon                                      |
| style         | object  | {}                        | style of button by object                                    |

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
[Stateless functional component]

## Dependencies
[React, { Component },PropTypes]

## States
## Function description

## [warn_noAction]

__Description:__  
[this function sends the console a warning that the button does not have a designated action]

__Usage:__
[This function is internal to the component and is invoked when the button has no related activity]

__Scope: __
[-]

__Input Parameter:__  
[-]

__Return:__
[Displays a UX warning on the console, the button has no activity ]

## [selectStyle]

__Description:__  
[this function is private, it sets the classes of the html object button ]

__Usage:__

```javascript
selectStyle(className,disabled)
```

__Scope: __
[-]

__Input Parameter:__  

* __Param - __ __[className]__

[-]

* __Param - __ __[disabled]__

[-]

__Return:__  

* __Type - __ __[StyleClass]__

Description the class name requiere of css

**/