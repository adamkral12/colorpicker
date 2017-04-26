import React from 'react';
import Scene from "../core/Scene";
import PairingBackground from '../sceneComponents/scenePairingComponents/PairingBackground';
import Line from '../sceneComponents/scenePairingComponents/Line';

export default class ScenePairing extends Scene {

    render () {
        const keyNumbers = [1,2,3];
        const keyNumbers2 = [4,5,6];
        const keyNumbers3 = [7,8,9];
        const keyNumbers4 = [0,"", "OK"];
        const icon = "BSP";

        this.state.hidden = !this.isSceneActive();

        return (
            <div id="scene-pairing2"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" }}
            >
                <PairingBackground color={ this.props.color }
                                   focus={ this.props.focus }
                                   font={ this.props.font }
                />

                <div className="logo"></div>
                <div className="info">
                    <h1>Welcome</h1>
                    <p>You must enter a <strong>pairing code</strong>, which you have obtained from your ISP partner of<strong> moderntv.cz</strong>. </p>
                </div>
                <div className="keyboard_pin_instruction">Enter pairing code:</div>
                <div className="keyboardNumeric">
                    <Line
                        text={ keyNumbers }
                        color={ this.props.color }
                        focus={ this.props.focus }
                        font={ this.props.font }
                    />
                    <Line
                        text={ keyNumbers2 }
                        color={ this.props.color }
                        focus={ this.props.focus }
                        font={ this.props.font }
                    />
                    <Line
                        text={ keyNumbers3 }
                        color={ this.props.color }
                        focus={ this.props.focus }
                        font={ this.props.font }
                    />
                    <Line
                        text={ keyNumbers4 }
                        icon={ icon } //icon for backspace
                        color={ this.props.color }
                        focus={ this.props.focus }
                        font={ this.props.font }
                    />
                </div>
                <div id="snippet-code2">
                    <div className="codes pairing_code">
                        <h1>Pairing code:</h1>
                        <div></div>
                    </div>
                    <div className="numbers">12345678</div>
                </div>
                <div className="url">www.moderntv.cz</div>
            </div>
        )
    };
}