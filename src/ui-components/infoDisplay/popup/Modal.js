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
            <div className="ModalComponent">
                {info}
            </div>
        )

    }
}

function noAction(){

}

Modal.proTypes = {
    info: PropTypes.string,
    getValue: PropTypes.func,
    title: PropTypes.string,
}

Modal.defaultProps ={
    info: "",
    getValue: noAction,
    title: ""
}