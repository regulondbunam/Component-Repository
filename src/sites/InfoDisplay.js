import React from 'react';
import {PreviewMD} from '../ui-components/Output/markDown/MarkDown'
import Modal from '../ui-components/Output/modal/Modal'
import ToolTip from '../ui-components/Output/toolTip/ToolTip'

const mdurl = 'https://dl.dropboxusercontent.com/s/spvinutaef097qt/testMD.md?dl=0'

export default function BasicInput() {

  return (
      <div>
        <h1>Modal</h1>
        <Modal title="Modal0-0" info="Esta es una ventana!!!" ></Modal>
        <br/>
        <br/>
        <h1>ToolTip</h1>
        <ToolTip tip='soy un ToolTip'>Parrafo infomativo con tooltip</ToolTip>
          <h1>MarkDown with react-markdown-preview by (uiw)</h1>
          <PreviewMD mdurl={mdurl} />
      </div>
  )
}