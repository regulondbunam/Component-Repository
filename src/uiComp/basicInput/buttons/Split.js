import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import DropDown from './DropDown'
import './Style.css'


const styleDropDown = {
    width: "auto",
    paddingLeft: "0",
    paddingRight: "0"
    
}
const styleButton = {
    float: "left",
    marginRight: "2px"
}


export default class Split extends Component {

    constructor(props) {
        super(props)
        this.state = {
            label: this.props.label,
            expand: this.props.expand
        }
    }

    selected = (value) =>{
        this.setState({label: value})
    }

    onClickB = () => {
        if(this.props.active){
            this.props.onClick(this.state.label);
        }
    };


    render() {
        const {
            active,
            options,
            styleButton,
            styleDropDown
            
        } = this.props;
        const {
            label,
            expand
        } = this.state
            return (
                <React.Fragment>
                    <Button label={label} onClick={this.onClickB} style={styleButton} active={active}/>
                    <DropDown label={""} active={active} content={options} style={styleDropDown} expand={expand} labelUpdate={false} onSelect={this.selected}/>
                </React.Fragment>
            )
    }
}

function noAction() {
    console.warn('Button has no activity')
}

Split.propTypes = {
    active: PropTypes.bool,
    expand: PropTypes.bool,
    label: PropTypes.string,
    options: PropTypes.array,
    onClick: PropTypes.func,
    style: PropTypes.object
};

Split.defaultProps = {
    active:  true,
    expand: false,
    label: "select option =>",
    options: [],
    onClick: noAction,
    styleButton: styleButton,
    styleDropDown: styleDropDown
};