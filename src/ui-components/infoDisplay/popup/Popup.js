import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from '../items/Item'

import './Style.css';

export default class Popup extends Component {
    render() {
        const {
            buttons,
            info,
            getValue,
            title,
        } = this.props
        return (
            <React.Fragment>
                {display}
            </React.Fragment>
        )

    }
}

function noAction(){

}

Popup.proTypes = {
    info: PropTypes.string,
    getValue: PropTypes.func,
    title: PropTypes.string,
}

Popup.defaultProps ={
    info: "",
    getValue: noAction,
    title: ""
}