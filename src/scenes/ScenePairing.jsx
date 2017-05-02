import React from 'react';
import Scene from "../core/Scene";
import PairingBackground from '../sceneComponents/scenePairing/PairingBackground';
import Line from '../sceneComponents/scenePairing/Line';
import PairingCode from '../sceneComponents/scenePairing/PairingCode';

export default class ScenePairing extends Scene {


    render () {
        const keyNumbers = [1,2,3];
        const keyNumbers2 = [4,5,6];
        const keyNumbers3 = [7,8,9];
        const keyNumbers4 = [0,"", "OK"];
        const icon = "icon-backspace";

        this.state.hidden = !this.isSceneActive();
        console.log("logo background style = " + this.props.logoBackgroundStyle);
        return (
            <div id="scene-pairing2"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" }}
            >
                <PairingBackground color={ this.props.color }
                                   colorNormal={ this.props.colorNormal }
                                   focus={ this.props.focus }
                />

                <div className="logo"
                     style={ this.props.logoBackgroundStyle }
                ></div>
                <div className="info"
                     style={ this.getFontCSS(this.props.colorNormal).font }
                >
                    <h1>Welcome</h1>
                    <p>You must enter a <strong>pairing code</strong>, which you have obtained from your ISP partner of<strong> moderntv.cz</strong>. </p>
                </div>
                <div className="keyboard_pin_instruction"
                     style={ this.getFontCSS(this.props.colorNormal).font }
                >
                    Enter pairing code:
                </div>
                <div className="keyboardNumeric">
                    <Line
                        text={ keyNumbers }
                        colorFocused={ this.props.colorFocused }
                        colorNormal={ this.props.colorNormal }
                        focus={ this.props.focus }
                    />
                    <Line
                        text={ keyNumbers2 }
                        focus={ this.props.focus }
                        colorFocused={ this.props.colorFocused }
                        colorNormal={ this.props.colorNormal }
                    />
                    <Line
                        text={ keyNumbers3 }
                        colorFocused={ this.props.colorFocused }
                        colorNormal={ this.props.colorNormal }
                        focus={ this.props.focus }
                    />
                    <Line
                        text={ keyNumbers4 }
                        icon={ icon } //icon for backspace
                        colorFocused={ this.props.colorFocused }
                        colorNormal={ this.props.colorNormal }
                        focus={ this.props.focus }
                    />
                </div>
                <div id="snippet-code2"
                     style={ this.getFontCSS(this.props.colorNormal).font }
                >
                    <div className="codes pairing_code">
                        <h1>Pairing code:</h1>
                        <PairingCode
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                        />
                    </div>
                    <div className="numbers">12345678</div>
                </div>
                <div className="url"
                     style={ this.getFontCSS(this.props.colorNormal).font }
                >www.moderntv.cz</div>
            </div>
        )
    };
}