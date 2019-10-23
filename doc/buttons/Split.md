# DropDown Component 0.1

to import:
```js
import Split from './uiComp/basicInput/buttons/Split'
```

## Content in Split component

### Default Component

#### Split

![Split B](https://i.ibb.co/jgV7d8F/Captura-de-Pantalla-2019-10-23-a-la-s-12-18-08.png)
![open split](https://i.ibb.co/2sd3307/Captura-de-Pantalla-2019-10-23-a-la-s-12-29-45.png)

use component
```js
<Split options={['araC','araB','araA']}  onClick={this._handleOnclick} />
```
## Props

name | Data Type  | Default  | Description
--|---|---|--
label  | String  | 'Select Option'  | label 
options  | Array String  | [] |  options
onClick  | Function  | noAction  | function to select a option
