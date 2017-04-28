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

    /* change focusable / normal / disabable to false
        if button is should not change in these states
     */
    state = {
        hover: false,
        normal: true,
        focusable: true,
        disabable: true,
        fontSelected: false
    };

    /*
        Re-render component only if:
            1) focus is normal and this.state.normal == true
            2) focus is disabled and this.state.disabable == true
            3) focus is focused and this.state.focusable == true
            4) focus is font-color -> changes font color in current state
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Buttons next state = ' + JSON.stringify(nextState) + ', nextprops = ' + JSON.stringify(nextProps));
        switch (nextProps.focus) {
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
                return false;
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
        let color = {};

        if (this.state.hover && this.state.focusable) {
            color = this.props.colorFocused;
        } else {
            color = this.props.color;
        }

        return reactCSS({
                'default': {
                    color: {
                        background: `rgba(${ color.rgb.r },
                              ${ color.rgb.g },
                              ${ color.rgb.b },
                              ${ color.rgb.a })`,

                        color: `rgb(${ color.font.r },
                              ${ color.font.g },
                              ${ color.font.b })`,

                        transition: `background-color 300ms linear`,
                        cursor: `pointer`,
                    },
                    /* Set seekBar opacity to 1 */
                    noOpacity: {
                        background: `rgb(${ color.rgb.r },
                              ${ color.rgb.g },
                              ${ color.rgb.b })`,
                        transition: `background-color 300ms linear`,
                        cursor: `pointer`,
                    },
                    /* TimeFrame CSS */
                    timeFrame: {
                        color: `rgb(${ color.rgb.r },
                              ${ color.rgb.g },
                              ${ color.rgb.b })`,
                        transition: `color 300ms linear`,
                        cursor: `pointer`
                    }
                }
            });

    };

    shadeRGBColor(percent) {
        let t = percent<0?0:255,p=percent<0?percent*-1:percent;
        let R = parseInt(this.props.colorFocused.rgb.r);
        let G = parseInt(this.props.colorFocused.rgb.g);
        let B =parseInt(this.props.colorFocused.rgb.b);
        return "rgb("+(Math.round((t-R)*p)+R)+","+(Math.round((t-G)*p)+G)+","+(Math.round((t-B)*p)+B)+")";
    }

    mouseOver() {
       this.setState({hover: true});

    }

    mouseOut() {
        this.setState({hover: false});
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