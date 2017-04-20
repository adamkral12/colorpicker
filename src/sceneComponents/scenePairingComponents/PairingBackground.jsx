import React from 'react';
import Button from '../../core/Button';

export default class PairingBackground extends Button {
    render () {
        return (
            <div>                    <div className="logo"></div>
                <div className="info">
                    <h1>Welcome</h1>
                    <p>You must enter a <strong>pairing code</strong>, which you have obtained from your ISP partner of<strong> moderntv.cz</strong>. </p>
                </div>
                <div className="keyboard_pin_instruction">Enter pairing code:</div>
                <div className="keyboardNumeric">
                    <div className="line">
                            <span className="key focusable tt focus" data-width="1" data-posx="0" data-posy="0"  data-val="1" data-keycode="49">
                                <span className="content keyboard">1</span>
                            </span>
                        <span className="key focusable tt" data-width="1" data-posx="1" data-posy="0"  data-val="2" data-keycode="50">
                                <span className="content keyboard">2</span>
                            </span>
                        <span className="key focusable tt" data-width="1" data-posx="2" data-posy="0"  data-val="3" data-keycode="51">
                                <span className="content keyboard">3</span>
                            </span>
                    </div>
                    <div className="line">
                            <span className="key focusable tt" data-width="1" data-posx="0" data-posy="1"  data-val="4" data-keycode="52">
                                <span className="content keyboard">4</span>
                            </span>
                        <span className="key focusable tt" data-width="1" data-posx="1" data-posy="1"  data-val="5" data-keycode="53">
                            <span className="content keyboard">5</span>
                        </span>
                        <span className="key focusable tt" data-width="1" data-posx="2" data-posy="1"  data-val="6" data-keycode="54">
                                <span className="content keyboard">6</span>
                            </span>
                    </div>
                    <div className="line">
                            <span className="key focusable tt" data-width="1" data-posx="0" data-posy="2"  data-val="7" data-keycode="55">
                                <span className="content keyboard">7</span>
                            </span>
                        <span className="key focusable tt" data-width="1" data-posx="1" data-posy="2"  data-val="8" data-keycode="56">
                                <span className="content keyboard">8</span>
                            </span>
                        <span className="key focusable tt" data-width="1" data-posx="2" data-posy="2"  data-val="9" data-keycode="57">
                                <span className="content keyboard">9</span>
                            </span>
                    </div>
                    <div className="line">
                            <span className="key focusable tt" data-width="1" data-posx="0" data-posy="3"  data-val="0" data-keycode="48">
                                <span className="content keyboard">0</span>
                            </span>
                        <span className="key focusable" data-width="1" data-posx="1" data-posy="3"  data-val="BSP" data-keycode="66">
                                <span className="content keyboard BSP">&nbsp;</span>
                            </span>
                        <span className="key focusable" data-width="1" data-posx="2" data-posy="3"  data-val="OK" data-keycode="79">
                                <span className="content keyboard OK">OK</span>
                            </span>
                    </div>
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
    }
}