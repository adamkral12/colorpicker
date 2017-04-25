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
        console.log('Button props ' + JSON.stringify(props));
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
    };

    /* change focusable and disabable to false
        if button is not focusable | disabable
     */
    state = {
        hover: false,
        normal: true,
        focusable: true,
        disabable: true
    };

    /*
        Re-render component only if:
            1) focus is normal and this.state.normal == true
            2) focus is disabled and this.state.disabable == true
            3) focus is focused and this.state.focusable == true
            4) focus is font-color -> changes font color in current state
     */
    shouldComponentUpdate(nextProps, nextState) {
        switch (nextProps.focus) {
            case 'font-color':
                return true;
            case 'normal':
                console.log('normal focus = ' + nextState.normal);
                return nextState.normal;
            case 'disabled':
                console.log('disabled focus')
                return nextState.disabable;
            case 'focused':
                console.log('focused focus')
                return nextState.focusable;
            default:
                console.log('unknown focus');
                return true;
        }
    }

    renderIcon() {
        if (this.props.iconClassName) {
            return <span className={this.props.iconClassName}/>;
        } else {
            return '';
        }
    }

    getStyles() {
        let styles = reactCSS({
                'default': {
                    color: {
                        background: `rgba(${ this.props.color.rgb.r },
                              ${ this.props.color.rgb.g },
                              ${ this.props.color.rgb.b },
                              ${ this.props.color.rgb.a })`,

                        color: `rgb(${ this.props.color.font.r },
                              ${ this.props.color.font.g },
                              ${ this.props.color.font.b })`,

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

    /*
        You can override this method by anything you want
     */
    render () {
        const classes = classNames('buttons', this.props.className);
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