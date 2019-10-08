import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Style.css';
import { STYLES_BUTTON } from './StaticVar';

export default class Button extends Component {

    Base = (props) => {
        return (
            <button type="button"
                className={selectStyle(props.type)} onClick={this.handleOnClickLink}>
                {this.props.children}
            </button>
        )
    }

    handleOnClickLink = (event) => {
        this.props.disabled
            ? noAction()
            : this.props.onClick(event);
    };

    render() {
        const {
            disabled,
            href,
            look,
            ripples,
            size,
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
    size: PropTypes.string,
    type: PropTypes.string,
    look: PropTypes.object,
    ripples: PropTypes.bool,
    onClick: PropTypes.func,
    href: PropTypes.string
};

Button.defaultProps = {
    children: 'RegulonDB Button!!',
    disabled: false,
    size: 'default',
    type: 'default',
    look: {},
    ripples: true,
    href: null,
    onClick: noAction
};

function noAction() {
    console.error('Button has no activity');
}

function selectStyle(type, disabled) {
    if (!disabled) {
        switch (type) {
            case 'accent':
                return STYLES_BUTTON[2]
                break
            default:
                return STYLES_BUTTON[1]
        }
    }else{
        return STYLES_BUTTON[0]
    }

}