import React from 'react';
import Scene from '../core/Scene';
import TableSettingsRow from '../sceneComponents/sceneConfigurationComponents/TableSettingsRow';
import PanelHeader from '../sceneComponents/sceneConfigurationComponents/Panelheader';

export default class SceneConfiguration extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();

        return(
            <div id="scene-configuration"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" }}
            >

            <PanelHeader
                text="SETTINGS"
                color={ this.props.color }
                focus={ this.props.focus }
            />

                <div id="snippet-settings">

                    <div className="player-clickable clickable" data-value="stream"></div>

                    <table className="settings">
                        <tbody>
                            <TableSettingsRow
                                textLeft="Video quality"
                                textRight="HD"
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />
                            <TableSettingsRow
                                textLeft="Output settings"
                                textRight="1080p@50Hz"
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />
                            <TableSettingsRow
                                textLeft="Show unavailable channels"
                                textRight="YES"
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />
                            <TableSettingsRow
                                textLeft="Account: custom@moderntv.eu"
                                textRight="Delete pairing"
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />
                            <TableSettingsRow
                                textLeft="Language selection"
                                textRight="English"
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />
                        </tbody>
                    </table>
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
                        <div className="label"><span className="deviceIP"/></div>
                        <div className="value tvIP"></div>
                    </div>
                    <div className="label_value_wrapper">
                        <div className="label"><span className="versionOfTheBoot"/></div>
                        <div className="value versionBoot"></div>
                    </div>
                </div>

                <div className="tech_podpora">
                    <span className="technicalSupport">Tech support:</span><br/>
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