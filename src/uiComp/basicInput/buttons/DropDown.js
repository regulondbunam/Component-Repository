import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css'; 
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.getElementsByTagName('HEAD')[0].appendChild(link);


export default class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        const children = this.props.children
        if (this.state.hover) {
            return(
                <div className={'dropdown'} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <div className={"dd-head"}>
                        {this.props.label+"  "}<i className="material-icons" style={{fontSize: "18px"}}>keyboard_arrow_up</i>
                    </div>
                    <div className={"dd-body"}> 
                            {
                                children
                            }
                    </div>
                </div>
            )
          
        } else {
            return(
                <div className={'dropdown'} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <div className={"dd-head"}>
                    {this.props.label+"  "}<i className="material-icons" style={{fontSize: "18px"}} >keyboard_arrow_down</i>
                </div>
                </div>
            )
        }
         
     }
}

DropDown.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool
};

DropDown.defaultProps = {
    label: 'DropDown',
    disabled: false,
};