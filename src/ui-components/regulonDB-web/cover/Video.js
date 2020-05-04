import React, { Component } from 'react';
 
class Video extends Component {
 
  render() {

    const {
      width,
      height,
      urlVideo
    } = this.props;
 
    // Datos del Video
    // dopbox video dl.dropboxusercontent.com
 
    const item = [
      {
        id: 1,
        video: 'https://www.youtube.com/watch?v=r9PoLG_AonA',
        formato: 'video/mp4',
      }
    ];
 
    return (
 
      item.map(item => {
 
        // Es necesario colocar una 'key' a partir de la versión de React JS 16
        // colocamos el objeto 'id: 1' en <div key={ item.id }  
 
        return  <div key={ item.id }>
                  <video width={width} height={height} autoPlay muted loop>
                    <source src={ item.video} type={ item.formato }/>
                    <h3>Video not supported</h3>
                  </video>
                </div>
       
 
      })
 
    )
    
 
  }
 
};
 
export default Video;

Video.defaultProps = {
  width: "auto",
  height: "auto",
  urlVideo: ""
}