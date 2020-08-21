/**

# Component (user guide)

# Component name 

[RadioButtonGroup --v1.0]

## Description  

[Component allows you to group radioButtons components]

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
| arrayOptions         | array  | []      | Set of options for the radioButton group                 |
| SelectOption         | string | ""      | option selected in radioButton group                     |
| arrayDisabledOptions | array  | []      | Set of options not available for the radioButton group   |
| title                | string | []      | Title of the checkbox group                              |
| onChange             | func   |         | Function you receive when there are changes in the group |

## Exception

__ Warning __  
radioButtonGroup does not have an added function for the change in prop \"onChange\"

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

| state           | type   | default           | description               |
| --------------- | ------ | ----------------- | ------------------------- |
| selectedOptions | string | prop.SelectOption | Status of selected option |

**/