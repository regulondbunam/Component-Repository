import React, { Component } from 'react';
import CoverVideo from './CoverVideo'
import CoverImg from './CoverImg'
import './Style.css'

const testimg = 'https://wallpapertag.com/wallpaper/full/a/4/1/148303-gorgerous-dna-background-1920x1080-for-mac.jpg'

export default class Cover extends Component {

  render() {

    const {
      coverType,
      links,
      source,
      opacity,
      title,
    } = this.props

    let displayed

    switch(coverType){
      case 'video':
        displayed = Video(source)
        break
      case 'img':
      case 'image':
      case 'imagen':
        displayed = Image(source)
        break
      default:
        displayed = Color(source)
              
    }
    
    return (
      <div className="coverComponent">
        <div className="coverComponent-Glass" style={{opacity: opacity}} />
        <div className="coverComponent-content">
          <h1>{title}</h1>
        </div>
        <div className="coverComponent-background">
          {
            displayed
          }
        </div>
      </div>

    )


  }

}


function Image(url){
  return(
    <CoverImg urlImage={url}/>
  )
}

function Color(color){
  console.log(color)
}

function Video(videoUrl){
  return (
    <CoverVideo url={videoUrl}/>
  )
}

Cover.defaultProps = {
  coverType: "Color",
  links: [],
  opacity: 0.6,
  source: '#000000',
  title: "Cover Title",
}
