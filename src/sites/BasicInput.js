import React from 'react';
import Button, {IconButton, DropDown, Split, Flip} from '../ui-components/basicInput/Buttons'
import CheckBox, {RadioButton} from '../ui-components/basicInput/Selectors'

const op = ["gene","GU","product","TF","Regulondb"]

function me(){
  alert("hola")
}

function alertDropdown (value){
  alert("se ha seleccionado: "+value)
}

export default function BasicInput() {

  return (
    <div style={{paddingLeft: "30px"}}>
      <h1>RegulonDB UI-Components</h1>
      <h2>Buttons</h2>
      <h3>Button</h3>
      <Button label="Button" accent={true} onClick={me}/>
      <br/>
      <Button label="Button" accent={true} active={false} onClick={me} />
      <br/>
      <Button label="Button" />
      <br/>
      <Button label="Button" active={false} />
      <h3>IconButton</h3>
      <IconButton/>
      <br/>
      <IconButton active={false}/>
      <h3>DropDown</h3>
      <DropDown content={op} onSelect={alertDropdown}/>
      <br/>
      <DropDown active={false}/>
      <br/>
      <h3>Split</h3>
      <Split options={op} onClick={alertDropdown}></Split>
      <br/>
      <h3>Flip</h3>
      <Flip label={"Left"} orientation={'l'}/>
      <br/>
      <Flip label={"Right"} orientation={'r'}/>
      <h2>Selectors</h2>
      <h3>CheckBox</h3>
      <CheckBox/>
      <br/>
      <br/>
      <br/>

    </div>
  );
}