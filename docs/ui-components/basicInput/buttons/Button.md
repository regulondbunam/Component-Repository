<iframe
     src="https://codesandbox.io/embed/default-button-ttm51?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Default Button"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

# Button Component 0.1

Represents a clickable button type element that can be used in forms or anywhere on the page that needs a button, The button component contains three presentations

#### Default Button
![DefaultButton](https://i.ibb.co/4jLFCDw/Default-Button.png)
use Component

It is the default button used in a standard way

to Import:

```js
  import {Button} from "regulondb-component-repository/uiComp/basicInput/Buttons"
```
to use
```js
 <Button>Button</Button>
```
## TEST DefaultButton!!

[![Edit relaxed-nash-ttm51](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/relaxed-nash-ttm51?fontsize=14)

#### Accent Button

![ AccentButton](https://i.ibb.co/7pxwXBM/Captura-de-Pantalla-2019-10-23-a-la-s-11-24-21.png)  use Component

This is the flashy button used for the call to action.

to Import:

```js
  import {Button} from "regulondb-component-repository/uiComp/basicInput/Buttons"
```

to use

```js
   <Button type="accent">Button</Button>
```
#### Cirular button
![Circular Button](https://i.ibb.co/GxCv4PG/Captura-de-Pantalla-2019-10-23-a-la-s-11-27-12.png) use Component

to import

  ```js
  import  {CircularB} from "regulondb-component-repository/uiComp/basicInput/Buttons"
  ```

  to usue

  ```js
  <Button type="accent" icon="icon_name" />
  ````
to modify the icon of the circular button place the name of the icon in the prop icon get the names of the icons in the link
https://material.io/resources/icons/?style=baseline

## Props

name | Data Type  | Default  | Description
--|---|---|--
children  | node  |   | The content of the button
disabled  | boolean  | false  | disabled button
type | string | 'default' | Button appearance
onClick  | function(event)  | noAction()  | on click event function
href  | String  | 'noURL' | url
