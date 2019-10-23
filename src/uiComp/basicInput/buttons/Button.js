import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';
import { STYLES_BUTTON } from './StaticVar';

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css'; 
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class Button extends Component {

    handleOnClickLink = (event) => {
        this.props.disabled
            ? noAction(1)
            : this.props.onClick(event);
    };

    render() {
        const {
            disabled,
            href,
            type
        } = this.props;
        return (
            <a href={href} className={selectStyle(type, disabled)} onClick={this.handleOnClickLink}>
                {this.props.children}
            </a>
        )

    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string
};

Button.defaultProps = {
    children: 'RegulonDB Button!!',
    disabled: false,
    type: 'default',
    href: null,
    onClick: noAction
};

export class CircularB extends Component {

    handleOnClickLink = (event) => {
        this.props.disabled
            ? noAction(1)
            : this.props.onClick(event);
    };

    render() {
        const {
            href,
            icon,
        } = this.props;
        return (
            <a href={href} className={"circularButton"}  onClick={this.handleOnClickLink}>
                <i className="material-icons">{icon}</i>
            </a>
        )

    }
}

CircularB.propTypes = {
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string
};

CircularB.defaultProps = {
    disabled: false,
    icon: 'sentiment_satisfied_alt',
    href: null,
    onClick: noAction
};

function noAction(mod) {
    switch(mod){
        case 1:
            console.log('Button disabled')
            break
        default:
            console.error('Button has no activity')
    }
    
}

function selectStyle(type, disabled) {
    if (!disabled) {
        switch (type) {
            case 'accent':
                return STYLES_BUTTON[2]
            default:
                return STYLES_BUTTON[1]
        }
    }else{
        return STYLES_BUTTON[0]
    }

}