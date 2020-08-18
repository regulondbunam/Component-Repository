import React from 'react';
import Button, {IconButton, DropDown, Split} from '../ui-components/Input/Buttons'
import CheckBox, {RadioButtonGrup, CheckBoxGrup} from '../ui-components/Input/Selectors'
import {TextBox, TextPassword, TextArea} from '../ui-components/Input/Text'
import Link from '../ui-components/Input/HLink'

const options = ["gene","GU","product","TF","Regulondb"]

function me(){
  alert("hola")
}

function alertDropdown (value){
  alert(`Se ha seleccionado: ${value.option}`)
}


export default function BasicInput() {

  return (
    <div style={{paddingLeft: "30px"}}>
      <h1>RegulonDB UI-Components</h1>
      <h2>Buttons</h2>
      <h3>Button</h3>
      <Button label="Button" accent={true} onClick={me}/>
      <br/>
      <Button label="Button" accent={true} disabled={true} onClick={me} />
      <br/>
      <Button label="Button" />
      <br/>
      <Button label="Button" disabled={true} />
      <h3>IconButton</h3>
      <IconButton/>
      <br/>
      <IconButton disabled={true}/>
      <h3>DropDown</h3>
      <DropDown arrayOptions={options} onSelect={alertDropdown}/>
      <br/>
      <DropDown disabled={true}/>
      <br/>
      <h3>Split</h3>
      <Split arrayOptions={options} onClick={alertDropdown}></Split>
      <br/>
      <h2>Selectors</h2>
      <h3>CheckBox</h3>
      <CheckBox value="simple CheckBox" />
      <CheckBoxGrup title="CheckBox Grup" onChange={(value)=>{console.log(value)}} arrayOptions={options} arraySelectOptions={[options[0],options[2]]} arrayDisabledOptions={[options[4]]}/>
      <h3>RadioButtonGrup</h3>
      <RadioButtonGrup name="grupOne" options={options} checkedOption={options[0]}/>
      <br/>
      <h2>Input Text</h2>
      <h3>TextBox</h3>
      <TextBox />
      <h3>Password Text</h3>
      <TextPassword/>
      <h3>TextArea</h3>
      <TextArea/>
      <br/>
      <h3>HyperLink*</h3>
      <Link>this is a simple Link</Link>
      <br/>
      <br/>
      this is a Link GENE
      <br/>
      <Link type={'gene'}>AraC</Link>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}
