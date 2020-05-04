import React, { Component } from 'react';
import Video from './Video'
import './Style.css'
 
export default class Cover extends Component {
 
  render() {
 
    return (
        <div className= "coverComponent">
        <div className="coverComponent-Glass">
        </div>
        <div className="coverComponent-background">
            <Video />
        </div>
        </div>
        
    )
    
 
  }
 
};
 