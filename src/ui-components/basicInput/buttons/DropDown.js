import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import './Style.css'


let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css'; 
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.getElementsByTagName('HEAD')[0].appendChild(link);
const arrowDown = "keyboard_arrow_down"
const arrowUp = "keyboard_arrow_up"
const styleDropDown = {
    width: "auto",
    paddingLeft: "5px",
    paddingRight: "5px",
}

export default class DropDown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            expanded: this.props.expand,
            label: this.props.label
        }
    }

    onSelect = (event) => {
        const value = event.target.id;
        this.props.labelUpdate?this.setState({label: value}):this.setState({label: this.state.label})
        this.setState({expanded: !this.state.expanded})
        this.props.onSelect(value)
        
    }

    expandDrop = (event) => {
        if(this.props.active){
            this.setState({expanded: !this.state.expanded})
        }
    };

    noActionN = () => {

    }

    render() {
        const {
            active,
            content,
            style
        } = this.props;
        const {
            label,
            expand
        } = this.state;

            return (
                <React.Fragment>
                <Button onClick={this.expandDrop} active={active} style={style}>
                    {label}
                    <i className="material-icons">
                    {
                    this.state.expanded
                    ?arrowUp
                    :arrowDown
                    }</i>
                </Button>
                {
                    this.state.expanded
                    ?<div className={"dropBox"} onClick={this.onSelect}>
                        {
                        content.map((value)=>
                            <Button id={value} key={value}  style={{marginBottom: "2px", width: "100%"}} onClick={this.noActionN}>
                                {value}
                            </Button>                              
                        )}
                    </div>
                    :<div/>
                }
                </React.Fragment>
                
            )  

    }
}

function noAction( value ) {
    console.warn('Select item '+value+' has no activity')
}

DropDown.propTypes = {
    active: PropTypes.bool,
    content: PropTypes.array,
    expand: PropTypes.bool,
    label: PropTypes.string,
    labelUpdate: PropTypes.bool,
    onselect: PropTypes.func,
    style: PropTypes.object
};

DropDown.defaultProps = {
    active:  true,
    content: [],
    expand: false,
    label: "DropDown",
    labelUpdate: true,
    onSelect: noAction,
    style: styleDropDown
};

