import React, { Component } from 'react';
import ViewPort from './core/ViewPort';
import ChooseSceneContainer from './core/ChooseSceneContainer';
import ColorPicker from "./core/ColorPicker";
import ChangeFocusContainer from './core/ChangeFocusContainer';
import SaveConfigurationButton from './core/SaveConfigurationButton';


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

    handleLogoUpdate(fileBase64) {
        //console.log('Main handle logo update');
        this.setState({ fileBase64: fileBase64 });
    }


    handleSceneChange(index) {
        this.setState({ activeSceneIndex: index });
    };

    shadeRGBColor(color, percent) {
        console.log('shade color = ' + JSON.stringify(color));

        const t = percent<0?0:255,p=percent<0?percent*-1:percent;
        const r = parseInt(color.rgb.r, 10);
        const g = parseInt(color.rgb.g, 10);
        const b = parseInt(color.rgb.b, 10);
        return {rgb: {
            r: (Math.round((t-r)*p)+r),
            g: (Math.round((t-g)*p)+g),
            b: (Math.round((t-b)*p)+b)
        },
            font: color.font
        };
    }

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

        if (this.state.focus === 'normal') {
            const colorNormalDarker = this.shadeRGBColor(color, -0.5);
            const colorNormalLighter = this.shadeRGBColor(color, 0.4);
            this.setState({ 'color-normal-darker': colorNormalDarker});
            this.setState({ 'color-normal-lighter': colorNormalLighter});
        } else if (this.state.focus === 'focused') {
            const colorFocusedLighter = this.shadeRGBColor(color, 0.15);
            this.setState({ 'color-focused-lighter': colorFocusedLighter});
        }
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
        const colorFocused = this.state[this.getColorbyFocus('focused')];
        const colorDisabled = this.state[this.getColorbyFocus('disabled')];
        const colorNormal = this.state[this.getColorbyFocus('normal')];

        const color = this.state[this.getColorbyFocus()];
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

                <SaveConfigurationButton
                    colorNormal={ colorNormal }
                    colorFocused={ colorFocused }
                    colorDisabled={ colorDisabled }
                    fileBase64={ this.state.fileBase64 }
                />

          </div>
        );
    }
}