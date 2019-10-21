import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Style.css';

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
document.getElementsByTagName('HEAD')[0].appendChild(link);

export default class Split extends Component {
	constructor(props) {
		super(props);
		this.state = {
			select: this.props.label,
			arrow: "down",
			press: false,
		};
	}

	handleOnClick = () => {
        this.props.disabled
            ? noAction(this.state.select)
            : this.props.onClick(this.state.select);
    };

	_selectOption = (op) => {
		this.setState({select: op})
		this.setState({ press: !this.state.press });
	}

	_onPress = () => {
		this.setState({ press: !this.state.press });
	};

	render() {
		const { href, options } = this.props;
		let icn = stateArrow(this.state.press)
		let body = <div></div>;
		if (this.state.press) {
			body = <ul className='sp-body'>
			{
				options.map((op) => {
				return <ListItem key={op} value={op} onItemClick={this._selectOption} />
			})}
			</ul>
		}
		return (
			<div className={'split'}>
				<a href={href} className={'sp-head'} onClick={this.handleOnClick}>{this.state.select}</a>
				<a href={href} className={icn[0]} onClick={this._onPress}>
					<i className="material-icons" style={{ fontSize: "16px" }} >{icn[1]}</i>
				</a>
					{body}

			</div>
		);
	}
}
function stateArrow(isPress) {
	let icn = []
	isPress ? (
		icn = ['sp-head-active', 'keyboard_arrow_up']
	) : (
			icn = ['sp-head', 'keyboard_arrow_down']
		)
	return icn
}

class ListItem extends Component{

	handleClick = () => {
		this.props.onItemClick(this.props.value);
	  }
	render() {
		return (
		  <li className='sp-item' onClick={this.handleClick}>
			{this.props.value}
		  </li>
		);
	  }
}


Split.propTypes = {
	href: PropTypes.string,
	label: PropTypes.string,
	options: PropTypes.array,
	disabled: PropTypes.bool,
	onClick: PropTypes.func
};

Split.defaultProps = {
	href: null,
	label: 'Select Option',
	options: ['Option-a', 'Option-b'],
	disabled: false,
	onClick: noAction
};

function noAction(val) {
    console.error("Button has no activity to: "+val);
}