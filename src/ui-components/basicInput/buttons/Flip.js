import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import './Style.css';

const defOrientation = 'r'
const styleLeft = {
    float: "left",
    marginRight: "2px"
}

export default class Flip extends Component {

    handleOnClickLink = (event) => {
        if(this.props.active){
            this.props.onClick(event);
        }
    };

    render() {
        const {
            active,
            label,
            orientation,
        } = this.props;
        // eslint-disable-next-line no-unused-vars
        let orientationIcon;
        switch(orientation){
            case 'l':
                orientationIcon ='keyboard_arrow_left'
                return(
                    <React.Fragment>
                        <div className={"flip"}>
                        <IconButton active={active} style={styleLeft} icon={orientationIcon} onClick={this.handleOnClickLink}/>
                        {label}
                        </div>
                    </React.Fragment>
                )
            case 'u':
                orientationIcon = 'keyboard_arrow_up'
                return(
                    <React.Fragment>
                        <div>
                        <IconButton active={active} style={styleLeft} icon={orientationIcon} onClick={this.handleOnClickLink}/>
                        {label}
                        </div>
                    </React.Fragment>
                )
            case 'd':
                orientationIcon = 'keyboard_arrow_down'
                return(
                    <React.Fragment>
                        <div>{label}</div><IconButton onClick={this.handleOnClickLink}/>
                    </React.Fragment>
                )
            case 'r':
                orientationIcon = 'keyboard_arrow_right'
                return(
                    <React.Fragment>
                        <div className={"flip"}>
                        {label}
                        <IconButton active={active} style={styleLeft} icon={orientationIcon} onClick={this.handleOnClickLink}/>
                        </div>
                    </React.Fragment>
                )
            default:
                console.warn("FipButton: no orientation selected")
                orientationIcon = 'keyboard_arrow_right'
                return(
                    <React.Fragment>
                        <div>{label}</div><IconButton/>
                    </React.Fragment>
                )
        }
        
    }
}

function noAction() {
    console.warn('Button has no activity')
}

Flip.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string,
    orientation: PropTypes.string,
    onClick: PropTypes.func
};

Flip.defaultProps = {
    active: true,
    label: "Next",
    orientation: defOrientation,
    onClick: noAction
};