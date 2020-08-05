

import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Styles from './Buttons.module.css'

const arrowDown = "keyboard_arrow_down"
const arrowUp = "keyboard_arrow_up"

const DropDown = ({
    accent = false,
    arrayOptions = [],
    className = "",
    disabled = false,
    id,
    isLabelUpdate = false,
    label = "DropDown",
    style = {},
    isDisplay = false,
    onSelect = ()=>{}
}) => {
    const [display, setDisplay] = useState(isDisplay)
    const [option, setOption] = useState({})
    const [_label, setLabel] = useState(label)

    useEffect(()=>{
        if(Object.entries(option).length !== 0 ){
            onSelect(option)
            setOption({})
        }
    },[option, onSelect])
    return (
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet" />
            <Button accent={accent} className={className} id={id} onClick={()=>{setDisplay(!display)}} disabled={disabled} style={style}>
                {_label}
                <i className="material-icons">
                    {
                        display
                            ? arrowUp
                            : arrowDown
                    }
                </i>
            </Button>
            {
                display
                ? <div className={Styles.dropBox}>
                    {
                        arrayOptions.map((value,index) =>
                            <Button id={value} key={value} style={{ marginBottom: "2px", width: "100%" }} 
                            onClick={()=>{
                                setOption({"index": index, "option":value});
                                setDisplay(false);
                                if(isLabelUpdate){setLabel(value)}
                            }}
                            >
                                {value}
                            </Button>
                        )}
                </div>
                : <></>
            }
        </>
    );
}

export default DropDown;

DropDown.propTypes = {
    arrayOptions: PropTypes.array,
    disabled: PropTypes.bool,
    isDisplay: PropTypes.bool,
    islabelUpdate: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
    style: PropTypes.object
};

