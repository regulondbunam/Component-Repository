/**
# Component (user guide)

# Component name 
[CheckBoxGroup --v1.0]

## Description  
[Component allows you to group checkbox components]

## Category   
[Structural, functional]  

## Live demo 
[-]

## Installation 
[-]

## Usage 
[---]

## Props 

| prop                 | type   | default | description                                              |
| -------------------- | ------ | ------- | -------------------------------------------------------- |
| arrayOptions         | array  | []      | Set of options for the checkbox group                    |
| arraySelectOptions   | array  | []      | Set of options selected for the checkbox group           |
| arrayDisabledOptions | array  | []      | Set of options not available for the checkbox group      |
| title                | string | []      | Title of the checkbox group                              |
| onChange             | func   |         | Function you receive when there are changes in the group |

## Exception
__ Warning __  
checkboxGroup does not have an added function for the change in prop \"onChange\"

## License
[MIT]

## Author 
[CCG-UNAM-RegulonDB]

**/


/**
# Component (technical guide)
## Component Type 
[Hoock]

## Dependencies
[React, {useState}, PropTypes, ui-components CheckBox]

## States

| state         | type  | default                 | description                |
| ------------- | ----- | ----------------------- | -------------------------- |
| selectOptions | array | prop.arraySelectOptions | Status of selected options |

**/