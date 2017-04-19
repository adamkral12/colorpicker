import React, { Component } from 'react';
import classNames from 'classnames';
import ucfirst from 'ucfirst';

/* Button
    Props:
        text = display text
        focus
        if text == focus, adds class focus
 */

export default class ChangeFocusButton extends Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleFocus(focus) {
        console.log('handle focus ' + focus);
    }

    render () {
        var classes = classNames('button', this.props.className ? this.props.className : '', this.props.focus === this.props.text ? "focus" : "");

        return (
            <button className={classes}
                    onClick={() => this.props.handleFocus(this.props.text)}
            >
                { ucfirst(this.props.text) }
            </button>
        );
    }
}