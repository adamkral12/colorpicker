import React from 'react';
import Scene from "../core/Scene";
import PairingBackground from '../sceneComponents/scenePairing/PairingBackground';
import Line from '../sceneComponents/scenePairing/Line';
import reactCSS from 'reactcss';

export default class ScenePairing extends Scene {

    getFontCss(color) {
        console.log('gete font = ' + JSON.stringify(color.font.r));
        return reactCSS({
                'default': {
                    font: {
                        color: `rgb(${ color.font.r },
                              ${ color.font.g },
                              ${ color.font.b })`
                    }
                }
            }
        );
    }

    render () {
        const keyNumbers = [1,2,3];
        const keyNumbers2 = [4,5,6];
        const keyNumbers3 = [7,8,9];
        const keyNumbers4 = [0,"", "OK"];
        const icon = "BSP";

        console.log('gete font = ' + JSON.stringify(this.getFontCss(this.props.color)));
        this.state.hidden = !this.isSceneActive();

        return (
            <div id="scene-pairing2"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" }}
            >
                <PairingBackground color={ this.props.color }
                                   focus={ this.props.focus }
                />

                <div className="logo"></div>
                <div className="info"
                     style={ this.getFontCss(this.props.color).font }
                >
                    <h1>Welcome</h1>
                    <p>You must enter a <strong>pairing code</strong>, which you have obtained from your ISP partner of<strong> moderntv.cz</strong>. </p>
                </div>
                <div className="keyboard_pin_instruction"
                     style={ this.getFontCss(this.props.color).font }
                >
                    Enter pairing code:
                </div>
                <div className="keyboardNumeric">
                    <Line
                        text={ keyNumbers }
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                    <Line
                        text={ keyNumbers2 }
                        color={ this.props.color }
                        focus={ this.props.focus }
                        colorFocused={ this.props.colorFocused }
                    />
                    <Line
                        text={ keyNumbers3 }
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                    <Line
                        text={ keyNumbers4 }
                        icon={ icon } //icon for backspace
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                </div>
                <div id="snippet-code2"
                     style={ this.getFontCss(this.props.color).font }
                >
                    <div className="codes pairing_code">
                        <h1>Pairing code:</h1>
                        <div></div>
                    </div>
                    <div className="numbers">12345678</div>
                </div>
                <div className="url"
                     style={ this.getFontCss(this.props.color).font }
                >www.moderntv.cz</div>
            </div>
        )
    };
}