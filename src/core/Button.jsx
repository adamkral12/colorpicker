import React, { Component } from 'react';
import reactCSS from 'reactcss';
import classNames from 'classnames';

/*
    Abstract Button component
    needs Props:
        className
        dataValue
        text = innerHTML
        colorFamilyIndex
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
        const classes = classNames('buttons focusable', this.props.className);
        console.log('button props = ' + JSON.stringify(this.props));
        const styles = reactCSS({
            'default': {
                color: {
                    background: `rgba(${ this.props.color.r },
                              ${ this.props.color.g },
                              ${ this.props.color.b },
                              ${ this.props.color.a })`
                }
            }});

        return (
        <li className={classes}
            data-value={this.props.dataValue}
            style={ styles.color }
        >
            {this.renderIcon()}
            <div className="text">{this.props.text}</div>
        </li>
        );
    }

}