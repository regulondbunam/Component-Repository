import React from 'react'
import PropTypes from 'prop-types';
import './Style.css';






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