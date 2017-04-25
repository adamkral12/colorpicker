import React, { Component } from 'react';
import classNames from 'classnames';

export default class ChangeFontButton extends Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
    };

    componentWillMount() {
        this.setState({ focus: false});
    }

    handleFocus() {
        this.setState({ focus: !this.state.focus });
        this.props.handleFocus(this.state.focus);
    }

    render() {
        const classes = classNames('change-font-button', this.state.focus ? 'selected' : '');
        return (
            <button className={ classes }
                    onClick={() => this.handleFocus() }
            >
                Font color
            </button>
        )
    }
}