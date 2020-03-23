import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css'; 
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class IconButton extends Component {

    handleOnClickLink = (event) => {
        if(this.props.active){
            this.props.onClick(event);
        }
    };

    render() {
        const {
            active,
            icon,
            style
        } = this.props;
            return (
                <button style={style} className={selectStyle(active)} onClick={this.handleOnClickLink}>
                    <i className="material-icons">{icon}</i>
                </button>
            )  

    }
}

function selectStyle (active) {
    let styleClass = "iconButton  default"
    active
    ? styleClass += " "
    : styleClass += " disabled"
    return styleClass
}

function noAction() {
    console.warn('Button has no activity')
}

IconButton.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
};

IconButton.defaultProps = {
    active: true,
    icon: "sentiment_satisfied_alt",
    onClick: noAction,
    style: {}
};