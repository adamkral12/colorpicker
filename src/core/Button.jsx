import React, { Component } from 'react';
import reactCSS from 'reactcss';
import classNames from 'classnames';

/*
    Button component
    needs Props:
        className
        dataValue
        text = innerHTML
        colorFamilyIndex
        optional iconClassName

 */

export default class Button extends Component {

    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    };

    state = {
        hover: false
    };

    renderIcon() {
        if (this.props.iconClassName) {
            return <span className={this.props.iconClassName}></span>;
        } else {
            return '';
        }
    }

    getStyles() {
        console.log('style = ' + JSON.stringify(this.props.color));

        var styles = reactCSS({
                'default': {
                    color: {
                        background: `rgba(${ this.props.color.rgb.r },
                              ${ this.props.color.rgb.g },
                              ${ this.props.color.rgb.b },
                              ${ this.props.color.rgb.a })`,

                        transition: `background-color 300ms linear`
                    },
                    /* Set seekBar opacity to 1 */
                    noOpacity: {
                        background: `rgb(${ this.props.color.rgb.r },
                              ${ this.props.color.rgb.g },
                              ${ this.props.color.rgb.b })`,
                        transition: `background-color 300ms linear`
                    },
                    /* TimeFrame CSS */
                    timeFrame: {
                        color: `rgb(${ this.props.color.rgb.r },
                              ${ this.props.color.rgb.g },
                              ${ this.props.color.rgb.b })`,
                        transition: `color 300ms linear`
                    }
                }
            });
        if (this.state.hover) {
            styles = reactCSS({
                'default': {
                    color: {
                        background: `rgba(${ this.props.color.rgb.r },
                              ${ this.props.color.rgb.g },
                              ${ this.props.color.rgb.b },
                              ${ this.props.color.rgb.a })`,
                        transition: `background-color 300ms linear`

                    }
                }
            });
        }
        return styles;
    };

    mouseOver() {
        this.setState({hover: true});
    }

    mouseOut() {
        this.setState({hover: true});
    }

    render () {
        const classes = classNames('buttons focusable', this.props.className);
        const styles = this.getStyles();

        return (
        <li className={classes}
            style={ styles.color }
            onMouseOver={ this.mouseOver }
            onMouseOut={ this.mouseOut }
        >
            {this.renderIcon()}
            <div className="text">{this.props.text}</div>
        </li>
        );
    }

}