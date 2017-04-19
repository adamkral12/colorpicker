import React, { Component } from 'react';
import ViewPort from './core/ViewPort';
import ChooseSceneContainer from './core/ChooseSceneContainer';
import ColorPicker from "./core/ColorPicker";
import ChangeFocusContainer from './core/ChangeFocusContainer';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    };


    state = {
        'color': {
            rgb: {
                r: '232',
                g: '151',
                b: '88',
                a: '1'
            }
        },
        'color-focused': {
            rgb: {
                r: '232',
                g: '118',
                b: '29',
                a: '1'
            }
        },
        'color-disabled': {
            rgb: {
                r: '232',
                g: '118',
                b: '29',
                a: '0.2'
            }
        },
        focus : 'disabled'
    };

    getColorbyFocus() {
        const focus = this.state.focus;

        switch(focus) {
            case 'normal':
                return 'color';
            case 'focused':
                return 'color-focused';
            case 'disabled':
                return 'color-disabled';
            default:
                console.warn('Main: Unknown focus ' + focus);
                return 'normal';
        }
    };

    handleStylesChange(color) {
        var colorState = {};
        colorState[this.getColorbyFocus()] = color;
        this.setState( colorState );
    };

    handleFocus(focus) {
        var colorState = {};
        this.setState({focus: focus});
        colorState[this.getColorbyFocus()] = this.state[this.getColorbyFocus()];
        this.setState( colorState );
    }

    render () {
        const color = this.state[this.getColorbyFocus()];
        const focus = this.state.focus;

        return (
          <div id="container">
              <ChooseSceneContainer />

              <ViewPort
                  onStylesChange={ this.handleStylesChange }
                  color={ color }
              />

              <ColorPicker
                  color={ color }
                  onStylesChange={ this.handleStylesChange }
              />

              <ChangeFocusContainer
                  handleFocus={this.handleFocus}
                  focus={ focus }
              />

          </div>
        );
    }
}