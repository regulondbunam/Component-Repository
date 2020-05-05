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
        video: urlVideo,
        formato: 'video/mp4',
      }
    ];

    return (
      // Es necesario colocar una 'key' a partir de la versión de React JS 16
      // colocamos el objeto 'id: 1' en <div key={ item.id }
      <React.Fragment>
      <div key={item.id} style={{width: width, height: height}}>
        <video width={width} height={height} autoPlay muted loop>
          <source src={item.video} type={item.formato} />
          Video no sported
        </video>
      </div>
      </React.Fragment>

    )


  }

};

export default Video;

Video.defaultProps = {
  width: "100%",
  height: "60vh",
  urlVideo: ""
}