# Button Component 0.1

to Import:

```js
import Button from 'regulondb-component-repository/uiComp/basicInput/buttons/Button
```

## Content in Button component

### Default Component

#### Default Button
![DefaultButton](https://i.ibb.co/4jLFCDw/Default-Button.png)
use Component
 ```js
 <Button>Button</Button>
 ```
 #### Accent Button
![ AccentButton](https://i.ibb.co/7pxwXBM/Captura-de-Pantalla-2019-10-23-a-la-s-11-24-21.png)  use Component
   ```js
   <Button type="accent">Button</Button>
   ```
#### Cirular button
![Circular Button](https://i.ibb.co/GxCv4PG/Captura-de-Pantalla-2019-10-23-a-la-s-11-27-12.png) use Component
  ```js
  import  {CircularB} from './uiComp/basicInput/buttons/Button'
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
