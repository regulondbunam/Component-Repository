import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

export default class Flip extends Component {

    handleOnClickLink = (event) => {
        this.props.disabled
            ? noAction()
            : this.props.onClick(event);
    };

    render() {
        const {
            href,
            dir,
            label
        } = this.props;
        let lb = label;
        let icon;
        switch(dir){
            case 'left':
                icon = 'keyboard_arrow_left'
                if(lb === 'NEXT'){ lb = 'PREV'}
                return (
                    <div className='flip-box'>
                        <a href={href} className={"circularButton flip"}  onClick={this.handleOnClickLink}>
                        <i className="material-icons">{icon}</i>
                        </a>
                        <p className='flip-label'>
                        {lb}
                        </p>
                    </div>
                    
                )
            default:
                icon = 'keyboard_arrow_right'
                return (
                    <div className='flip-box'>
                        <p className='flip-label'>
                            {lb}
                        </p>
                        <a href={href} className={"circularButton flip"}  onClick={this.handleOnClickLink}>
                        <i className="material-icons">{icon}</i>
                        </a>
                    </div>
                )
        }
    }
}

Flip.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    dir: PropTypes.string
};

Flip.defaultProps = {
    label: 'NEXT',
    href: null,
    onClick: noAction,
    dir: 'right'
};

function noAction() {
    console.error('Button has no activity');
}