import React, {Component } from 'react'
import PropTypes from 'prop-types';
import './Style.css';

export class CheckBoxGrup extends Component {


}

CheckBoxGrup.propTypes = {
    dropdown: PropTypes.bool,
    grupOf: PropTypes.elementType,
    options: PropTypes.array,
    onSelect: PropTypes.func,
    styleCheckBox: PropTypes.object,
    styleGrupBox: PropTypes.object,
    title: PropTypes.string
};

CheckBoxGrup.defaultProps = {
    
};