import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';
import { STYLES_BUTTON } from './StaticVar';

export default class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    render() {
        if (this.state.hover) {
            return(
                <div  onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <div className={'dd'} >
                        {this.props.label}
                    </div>
                    <div style={{position: 'absolute'}}>
                        <div>
                            hola
                        </div>
                    </div>
                </div>
            )
          
        } else {
            return(
                <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <div className={"dd"}>
                    {this.props.label}
                </div>
                </div>
            )
        }
         
     }
}

DropDown.propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool
};

DropDown.defaultProps = {
    label: 'RegulonDB DropDown',
    disabled: false,
};