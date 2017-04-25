import React, { Component } from 'react';
import classNames from 'classnames';

export default class ChangeFontButton extends Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.state = { focused: false };
    };

    handleFocus(focused) {
        this.setState({ focused: !focused });
        this.props.handleFontSelection(!focused);
    }

    render() {
        const classes = classNames('change-font-button', this.state.focused ? 'selected' : '');
        return (
            <button className={ classes }
                    onClick={() => this.handleFocus(this.state.focused) }
            >
                Font color
            </button>
        )
    }
}