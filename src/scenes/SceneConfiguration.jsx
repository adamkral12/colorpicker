import React from 'react';
import Scene from '../core/Scene';

export default class SceneConfiguration extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();

        return(
            <div id="scene-configuration"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" }}
            >

                <div className="snippet-panel-header">
                    <div className="day">Wednesday 26. 4.</div>
                    <div className="title">SETTINGS</div>
                    <div className="time">07:45</div>
                </div>

                <div id="snippet-settings">

                    <div className="player-clickable clickable" data-value="stream"></div>

                    <table className="settings">
                        <tbody><tr className="row focusable" data-value="stream-quality">
                            <th className="box px437 focus-blue"><div className="qualitySetting">Video quality</div></th>
                            <td className="box px263 focus-yellow center"><div className="qualitySelected"></div></td>
                        </tr>
                        <tr className="row focusable customPosition" data-value="stream-output" id="onlyArrisVideoOutput">
                            <th className="box px437 focus-blue"><div className="outputSettings">Output settings</div></th>
                            <td className="box px263 focus-yellow center"><div className="outputSettingsSelected"></div></td>
                        </tr>
                        <tr className="row focusable" data-value="unavailable-only">
                            <th className="box px437 focus-blue"><div className="unavailableChannels">Show unavailable channels</div></th>
                            <td className="box px263 focus-yellow center"><div><span id="unavailable-only">YES</span></div></td>
                        </tr>
                        <tr className="row focusable" data-value="automatic-shutdown" id="onlyArrisAutomaticShutdown">
                            <th className="box px437 focus-blue"><div className="automaticShutdown">Automatic shut down 4h</div></th>
                            <td className="box px263 focus-yellow center"><div><span id="automatic-shutdown"></span></div></td>
                        </tr>
                        <tr className="row focusable" data-value="delete-pairing">
                            <th className="box px437 focus-blue"><div><span className="account">Account</span>: <span id="account"></span></div></th>
                            <td className="box px263 focus-yellow center"><div className="cancelPairing">Delete pairing</div></td>
                        </tr>
                        <tr className="row focusable" data-value="language-setting">
                            <th className="box px437 focus-blue"><div className="languageSetting">Language selection</div></th>
                            <td className="box px263 focus-yellow center"><div className="languageSelected">English</div></td>
                        </tr>
                        <tr className="row focusable focus" data-value="player-type-setting" id="playerTypeSettings">
                            <th className="box px437 focus-blue"><div className="playerTypeSetting"></div></th>
                            <td className="box px263 focus-yellow center"><div className="playerTypeSelected"></div></td>
                        </tr>
                        </tbody></table>
                </div>

                <div className="info">
                    <div className="label_value_wrapper">
                        <div className="label"><span className="versionOfTheApplication">App version</span>:</div>
                        <div className="value version">2.0.213</div>
                    </div>
                    <div className="label_value_wrapper">
                        <div className="label"><span className="deviceID">Device ID</span>:</div>
                        <div className="value tvName"></div>
                    </div>
                    <div className="label_value_wrapper">
                        <div className="label"><span className="deviceIP"></span></div>
                        <div className="value tvIP"></div>
                    </div>
                    <div className="label_value_wrapper">
                        <div className="label"><span className="versionOfTheBoot"></span></div>
                        <div className="value versionBoot"></div>
                    </div>
                </div>

                <div className="tech_podpora">
                    <span className="technicalSupport">Tech support</span>
                    <span className="emailSupport">support@moderntv.eu</span>
                </div>

                <div className="snippet-rc-buttons rc-buttons">
                    <table>
                        <tbody><tr><td className="start"></td>
                            <td className="fill"></td><td className="clickable button-red" data-value="0"><div className="color-button-red"> </div><div className="button"></div><div className="button-red-text text">Menu</div></td><td className="clickable button-green" data-value="1"><div className="color-button-green"> </div><div className="button"></div><div className="button-green-text text">Currently</div></td><td className="clickable button-yellow" data-value="2"><div className="color-button-yellow"> </div><div className="button"></div><div className="button-yellow-text text">EPG</div></td><td className="clickable button-back" data-value="3"><div className="color-button-back"> </div><div className="button"></div><div className="button-back-text text">Back</div></td><td className="end"></td></tr>
                        </tbody></table>
                </div>

            </div>
        )
    }
}