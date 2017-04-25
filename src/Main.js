import React, { Component } from 'react';
import ViewPort from './core/ViewPort';
import ChooseSceneContainer from './core/ChooseSceneContainer';
import ColorPicker from "./core/ColorPicker";
import ChangeFocusContainer from './core/ChangeFocusContainer';


/* Main class
    Handles style of style changing buttons
        focused | normal | disabled
    Handles active scene

 */
export default class Main extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleSceneChange = this.handleSceneChange.bind(this);
    };


    handleSceneChange(index) {
        this.setState({ activeSceneIndex: index });
    };

    /* default state */
    state = {
        'color': {
            rgb: {
                r: '223',
                g: '101',
                b: '0',
                a: '1'
            },
            font: {
                r: '255',
                g: '255',
                b: '255'
            }
        },
        'color-focused': {
            rgb: {
                r: '232',
                g: '118',
                b: '29',
                a: '1'
            },
            font: {
                r: '0',
                g: '0',
                b: '0'
            }
        },
        'color-disabled': {
            rgb: {
                r: '232',
                g: '118',
                b: '29',
                a: '0.2'
            },
            font: {
                r: '255',
                g: '255',
                b: '255'
            }
        },
        focus : 'normal',
        activeSceneIndex: 0

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
                return 'color';
        }
    };


    handleStylesChange(color) {
        console.log(' MAIN handleStylesChange color = ' + JSON.stringify(color));
        var colorState = {};
        colorState[this.getColorbyFocus()] = color;
        this.setState( colorState );
    };


    handleFocus(focus) {
        var colorState = {};
        this.setState({focus: focus});
        colorState[this.getColorbyFocus()] = this.state[this.getColorbyFocus()];
        this.setState( colorState );
    };


    render () {
        const color = this.state[this.getColorbyFocus()];
        const font = color.font;
        console.log('MAIn font = ' + JSON.stringify(font));
        const focus = this.state.focus;

        return (
          <div id="container">
              <ChooseSceneContainer
                  onSceneChange={ this.handleSceneChange }
                  activeSceneIndex={ this.state.activeSceneIndex }
              />

              <ViewPort
                  onStylesChange={ this.handleStylesChange }
                  activeSceneIndex={ this.state.activeSceneIndex }
                  color={ color }
                  focus={ this.state.focus }
                  font={ font }
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