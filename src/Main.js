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
        this.handleFontSelection = this.handleFontSelection.bind(this);
        this.handleLogoUpdate = this.handleLogoUpdate.bind(this);
    };

    handleLogoUpdate(logoBackgroundStyle) {
        //console.log('Main handle logo update');
        this.setState({ logoBackgroundStyle: logoBackgroundStyle });
    }


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
                r: '245',
                g: '166',
                b: '5',
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
                r: '210',
                g: '180',
                b: '161',
                a: '0.2'
            },
            font: {
                r: '255',
                g: '255',
                b: '255'
            }
        },
        focus : 'normal',
        activeSceneIndex: 0,
        fontSelected: false
    };


    getColorbyFocus(focus) {
        if (!focus || focus === undefined) {
            focus = this.state.focus;
        }

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

    /* Change color of background or font based
        on this.state.fontSelected
     */
    handleStylesChange(color) {
        let nextColor = {};
        if (!this.state.fontSelected) {
            nextColor = {
                font: this.state[this.getColorbyFocus()].font,
                rgb: color.rgb
            };
        } else {
            nextColor = { rgb: this.state[this.getColorbyFocus()].rgb,
                font: color.rgb
            };
        }

        let colorState = {};
        colorState[this.getColorbyFocus()] = nextColor;
        this.setState(colorState);
    };


    handleFocus(focus) {
        var colorState = {};
        this.setState({focus: focus});
        colorState[this.getColorbyFocus()] = this.state[this.getColorbyFocus()];
        this.setState( colorState );
    };

    handleFontSelection(fontSelected) {
        this.setState({ fontSelected : fontSelected});
    };


    render () {
        const color = this.state[this.getColorbyFocus()];
        const colorFocused = this.state[this.getColorbyFocus('focused')];
        const colorDisabled = this.state[this.getColorbyFocus('disabled')];
        const colorNormal = this.state[this.getColorbyFocus('normal')];
        const font = { rgb: color.font };
        const focus = this.state.focus;
        console.log('Main state = ' + JSON.stringify(this.state));

        return (
          <div id="container">
              <ChooseSceneContainer
                  onSceneChange={ this.handleSceneChange }
                  activeSceneIndex={ this.state.activeSceneIndex }
              />

              <ViewPort
                  onStylesChange={ this.handleStylesChange }
                  activeSceneIndex={ this.state.activeSceneIndex }
                  colorFocused={ colorFocused }
                  colorDisabled={ colorDisabled }
                  colorNormal={ colorNormal }
                  focus={ this.state.focus }
                  onLogoUpdate={ this.handleLogoUpdate }
                  logoBackgroundStyle={ this.state.logoBackgroundStyle }
              />

              <ColorPicker
                  color={ this.state.fontSelected ? font : color }
                  onStylesChange={ this.handleStylesChange }
              />

              <ChangeFocusContainer
                  handleFocus={this.handleFocus}
                  handleFontSelection={ this.handleFontSelection }
                  focus={ focus }
              />

          </div>
        );
    }
}