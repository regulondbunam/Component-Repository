import React from 'react';
import Item from '../ui-components/infoDisplay/items/Item'


export default function BasicInput() {

  return (
      <div>
          <h2>Model Items</h2>
          <h3>clear</h3>
          <Item model="clear"/>
          <h3>accent</h3>
          <Item model="accent"/>
          <h3>accent_ligth</h3>
          <Item model="accent_ligth"/>
          <h3>dark</h3>
          <Item model="dark"/>
          <h2>Tables</h2>
          <br/>
          <br/>
          <br/>
      </div>
  )
}