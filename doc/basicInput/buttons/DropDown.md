# DropDown Component 0.1

to import:
```js
  import DropDown from './uiComp/basicInput/buttons/DropDown'
```

## Content in DropDown component

### Default Component

#### DropDown button

![DropDown B](https://i.ibb.co/db1LRQr/Captura-de-Pantalla-2019-10-23-a-la-s-11-45-04.png)
![DropDown](https://i.ibb.co/52b11rK/Captura-de-Pantalla-2019-10-23-a-la-s-11-48-34.png)

use Component
```js
<DropDown>
  <p>label item</p>
  <Button>
  Item Button
  </Button>
</DropDown>
```
## Props

name | Data Type  | Default  | Description
--|---|---|--
children  | node  |   | The content of the DropDown
disabled  | boolean  | false  | disabled button
label  | String  | '' | label in DropDown
