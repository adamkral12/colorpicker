import React, { Component } from 'react';
import classNames from 'classnames';

/*
    Abstract Button component
    needs Props:
        className
        dataValue
        text = innerHTML
        optional iconClassName

 */

export default class Button extends Component {

    renderIcon() {
        if (this.props.iconClassName) {
            return <span className={this.props.iconClassName}></span>;
        } else {
            return '';
        }
    }

    render () {
        var classes = classNames('buttons focusable', this.props.className);

        return (
        <li className={classes} data-value={this.props.dataValue}>
            {this.renderIcon()}
            <div className="text">{this.props.text}</div>
        </li>
        );
    }

}