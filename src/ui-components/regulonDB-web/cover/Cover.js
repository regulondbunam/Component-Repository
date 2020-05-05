import React, { Component } from 'react';
import CoverVideo from './CoverVideo'
import './Style.css'

export default class Cover extends Component {

  render() {

    const {
      imgUrl,
      links,
      videoUrl,
      title,
    } = this.props
    
    return (
      <div className="coverComponent">
        <div className="coverComponent-Glass" />
        <div className="coverComponent-content">
          <h1>{title}</h1>
        </div>
        <div className="coverComponent-background">
          <CoverVideo url={videoUrl}/>
        </div>
      </div>

    )


  }

}

function CheckURL(url){

}

Cover.defaultProps = {
  imgUrl: [],
  links: [],
  videoUrl: "",
  title: "Cover Title",
}
