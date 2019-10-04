import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Style.css'

export default class Button extends Component {
    static propTypes = {
        disabled: Boolean,
        size: String,
        look: Object,
        ripples: Boolean,
        onClick: Function,
        to: String,
    }

    handleOnClickLink = (event) => {
        this.props.onClick(event);
    }
    
    render() {
        return (
            <button
                type="button"
                className="simpleButton"
                onClick={this.handleOnClickLink}
            >
                {this.props.children}
            </button>
        )
    }

}

Button.defaultProps = {
    disabled: false,
    size: 'default',
    look: {},
    ripples: true,
    onClick: noAction(),
    to: 'noURL'
}

function noAction(){
    console.log("no action defined")
}