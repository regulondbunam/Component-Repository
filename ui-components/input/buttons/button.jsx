/**
# Button v0.5.0

This component is a simple button, activated by a click, has two different aspects, by default, accent

 
## Live demo 

<iframe src="https://codesandbox.io/embed/awesome-breeze-20lr3?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="awesome-breeze-20lr3"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Usage 

`<Button label="Button" onClick={actionFunction}/>` 

## Props

| props     | type     | default    | description                                     |
| --------- | -------- | ---------- | ----------------------------------------------- |
| accent    | boolean  | false      | enables accent button design                    |
| className | string   |            | Class Name of item button                       |
| disabled  | boolean  | false      | disable the button                              |
| id        | string   |            | id to html document                             |
| label     | string   | Button     | button label                                    |
| style     | object   | {}         |                                                 |
| onClick   | function | noAction() | insert the function to be executed when pressed |

## Installation

[npm install ui-component]

## Category   
[Visual, Functional Component] 

## Exception

__Warning__
 button has no activity, use Prop "onClick" to add Activity with a function

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

[React,PropTypes, Button.module.css]

## States

[-]

# Function description

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
selectStyle(className,accent,disabled)
```
__Scope: __
[-]

__Input Parameter:__  

* __Param - __ __[accent]__

Description this is a button prop accent

* __Param - __ __[disabled]__

Description this is a button prop disabled

__Return:__  

* __Type - __ __[StyleClass]__

Description the class name requiere of css

**/

import React from "react";
import PropTypes from "prop-types";
import Styles from "./Buttons.module.css";

const Button = ({
  accent = false,
  className = "",
  children,
  disabled = false,
  id,
  label = "",
  style = {},
  onClick = warn_noAction
}) => {
  function OnClick(event) {
    if (!disabled) {
      onClick(event);
    }
  }

  return (
    <button
      id={id}
      className={selectStyle(className, accent, disabled)}
      onClick={OnClick}
      style={style}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;

function selectStyle(className, accent, disabled) {
  let styleClass = className + Styles.button;
  accent
    ? (styleClass += " " + Styles.accent)
    : (styleClass += " " + Styles.default);
  disabled ? (styleClass += " " + Styles.disabled) : (styleClass += " ");

  return styleClass;
}

function warn_noAction() {
  console.warn(
    'Button has no activity, use Prop "onClick" to add Activity with a function n.n'
  );
}

Button.propTypes = {
  accent: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};
