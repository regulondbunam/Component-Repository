import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

export default class HyperLink extends Component {

    handleOnClickLink = (event) => {
        this.props.disabled
            ? noAction()
            : this.props.onClick(event);
    };

    render() {
        const {
            disabled,
            href,
            type
        } = this.props;
        return (
            <a href={href} className={selectType(type, disabled)} onClick={this.handleOnClickLink}>
                {this.props.children}
            </a>
        )

    }
}

HyperLink.propTypes = {
    children: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string
};

HyperLink.defaultProps = {
    children: 'hyperlink',
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

function selectType(type, disabled) {
    if (!disabled) {
        switch (type) {
            case 'gene':
                return 'hyp-gene'
            default:
                return 'hyp'
        }
    }else{
        return 'hyp-disabled'
    }

}