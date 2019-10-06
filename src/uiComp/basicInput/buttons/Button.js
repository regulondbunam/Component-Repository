import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'
import {STYLES_BUTTON} from './StaticVar'
 
export default class Button extends Component {

    
 
    handleOnClickLink = (event) => {
            this.props.onClick(event);
    }
     
    render() {
        let style = STYLES_BUTTON[0];

        if(this.props.look !== {}){
            switch(this.props.type){
                case 'accent':
                    style = STYLES_BUTTON[1];
                    break;
                default:
                    style = STYLES_BUTTON[0];
            }
        }
        return (
            <button
                type="button"
                className={style}
                onClick={this.handleOnClickLink}
            >
                {this.props.children}
            </button>
        )
    }
 
}

Button.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
    look: PropTypes.object,
    ripples: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string
}
 
Button.defaultProps = {
    children: "RegulonDB Button!!",
    disabled: false,
    size: 'default',
    type: 'default',
    look: {},
    ripples: true,
    href: null,
    onClick: noAction
}

function noAction (){
    console.error("Button has no activity")
} 
