import React from 'react'
import PropTypes from 'prop-types';
import './Style.css';


export class InputText extends React.Component {
    state = {
        keyword: this.props.value
    }

    static getDerivedStateFromProps(props, state) {
        return {
            keyword: props.value
        }
    }

    _inputChangedHandler(event) {
        this.setState({ keyword: event.target.value })
        this.props.onChangeText(event.target.value)
    }

    render() {
        const {
            placeholder = "Hint text"
        } = this.props
        return (
            <input
                type="text"
                className='InText'
                placeholder={placeholder}
                value={this.state.keyword}
                onChange={(event) => this._inputChangedHandler(event)}
            >
            </input>
        )
    }
}

InputText.propTypes = {
    disabled: PropTypes.bool,
    onChangeText: PropTypes.func
};

InputText.defaultProps = {
    disabled: false,
    onChangeText: noAction
};

export class PasswordInText extends React.Component {
    state = {
        keyword: this.props.value
    }

    static getDerivedStateFromProps(props, state) {
        return {
            keyword: props.value
        }
    }

    _inputChangedHandler(event) {
        this.setState({ keyword: event.target.value })
        this.props.onChangeText(event.target.value)
    }

    render() {
        const {
            placeholder = "password"
        } = this.props
        return (
            <input
                type="password"
                className='InText'
                placeholder={placeholder}
                value={this.state.keyword}
                onChange={(event) => this._inputChangedHandler(event)}
            >
            </input>
        )
    }
}

PasswordInText.propTypes = {
    disabled: PropTypes.bool,
    onChangeText: PropTypes.func
};

PasswordInText.defaultProps = {
    disabled: false,
    onChangeText: noAction
};

export class TextArea extends React.Component {

    state = {
        keyword: this.props.value
    }

    static getDerivedStateFromProps(props, state) {
        return {
            keyword: props.value
        }
    }

    _inputChangedHandler(event) {
        this.setState({ keyword: event.target.value })
        this.props.onChangeText(event.target.value)
    }

    render() {
        const {
            rows = 5,
            cols = 100,
        } = this.props
        return (
            <textarea className='InText'
                rows={rows}
                cols={cols}
                value={this.state.keyword}
                onChange={(event) => this._inputChangedHandler(event)}
            >
            </textarea>
        )
    }
}

TextArea.propTypes = {
    disabled: PropTypes.bool,
    onChangeText: PropTypes.func
};

TextArea.defaultProps = {
    disabled: false,
    onChangeText: noAction
};

function noAction(mod) {
    switch (mod) {
        case 1:
            console.log('AreaText disabled')
            break
        default:
            console.error('The AreaText State is undefined')
    }

}