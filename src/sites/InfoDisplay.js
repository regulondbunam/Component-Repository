import React from 'react';
import {PreviewMD} from '../ui-components/Output/markDown/MarkDown'

const mdurl = 'https://dl.dropboxusercontent.com/s/spvinutaef097qt/testMD.md?dl=0'

export default function BasicInput() {

  return (
      <div>
          <h1>MarkDown with react-markdown-preview by (uiw)</h1>
          <PreviewMD mdurl={mdurl} />
      </div>
  )
}