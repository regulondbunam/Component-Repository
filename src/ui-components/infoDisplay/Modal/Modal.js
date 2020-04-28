import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../items/Item'

import './Style.css';

export default class Modal extends Component {
    render() {
        const {
            buttons,
            info,
            getValue,
            title,
        } = this.props
        return (
            <div className="modalComponent">
                <div className="modalComponentContent">
                {info}
                </div>
                
            </div>
        )

    }
}

function noAction(){

}

Modal.proTypes = {
    collapsed: PropTypes.bool,
    info: PropTypes.string,
    getValue: PropTypes.func,
    title: PropTypes.string,
}

Modal.defaultProps ={
    info: "info",
    getValue: noAction,
    title: ""
}