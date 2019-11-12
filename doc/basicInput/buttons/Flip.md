# Flip Component 0.1

to import:
```js
  import {Flip} from 'regulondb-component-repository/uiComp/basicInput/Buttons'
```

## Content in Flip component

### Default Component

#### Flip button

![Flip B](https://i.ibb.co/dc3m5tW/Captura-de-Pantalla-2019-10-23-a-la-s-12-03-29.png)

use Component

```js
<Flip dir='left'></Flip>
        <Flip></Flip>
```
to set the direction of the button is used the prop dir receiving the parameter left or right

## Props

name | Data Type  | Default  | Description
--|---|---|--
dir  | String  | 'right'  | button direction
label  | String  | 'NEXT'  | label
onClick  | function(event)  | noAction()  | on click event function
