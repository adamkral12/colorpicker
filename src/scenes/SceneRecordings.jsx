import React from 'react';
import Scene from '../core/Scene';
import Panelheader from '../sceneComponents/sceneConfiguration/PanelHeader';
import RecordingsTableRow from '../sceneComponents/sceneRecords/RecordignsTableRow';

export default class SceneRecordings extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();
        const fontNormalStyle = this.getFontCSS(this.props.colorNormal).font;
        return (
            <div id="scene-recorded"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" } }
            >

                <Panelheader
                    text="RECORDINGS"
                    color={ this.props.color }
                    colorNormal={ this.props.colorNormal }
                    focus={ this.props.focus }
                />


                <div id="snippet-recorded-info"
                >
                    <div className="info-event">
                        <div className="eventName text"
                             style={ fontNormalStyle }
                        >Westworld (9)</div>
                        <div className="eventInfo">
                            <table className="info-event">
                                <tbody>
                                <tr className="row">
                                        <th>
                                            <div className="length text"
                                                 style={ fontNormalStyle }
                                            >Length: </div>
                                        </th>
                                        <td>
                                            <div className="lengthValue text"
                                                 style={ fontNormalStyle }
                                            >01:25</div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <th>
                                            <div className="validity text"
                                                 style={ fontNormalStyle }
                                            >Validity: </div>
                                        </th>
                                        <td>
                                            <div className="validityValue text"
                                                 style={ fontNormalStyle }
                                            >3 months</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="info">
                        <table className="info">
                            <tbody>
                                <tr className="row">
                                    <th>
                                        <div className="freeCapacity text"
                                             style={ fontNormalStyle }
                                    >
                                        Free capacity:
                                    </div>
                                    </th>
                                    <td>
                                        <div className="freeCapacityValue text"
                                             style={ fontNormalStyle }
                                        >6h 12m</div>
                                    </td>
                                </tr>
                                <tr className="row">
                                    <th>
                                        <div className="totalCapacity text"
                                             style={ fontNormalStyle }
                                        >Total capacity:
                                        </div></th>
                                    <td><div className="totalCapacityValue text"
                                             style={ fontNormalStyle }
                                    >10h 00m</div></td>
                                </tr>
                                <tr className="row">
                                    <th><div className="countOfRecorded text"
                                             style={ fontNormalStyle }
                                    >Number of events: </div></th>
                                    <td><div className="countOfRecordedValue text"
                                             style={ fontNormalStyle }
                                    >5</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div id="snippet-recorded-list">

                    <div className="player-clickable clickable" ></div>
                    <div className="emptyList"></div>

                    <div className="currentlyArrow clickable" id="recArrowLeft">
                       <span className="arrow arrow-left icon-arrow-left"/>
                    </div>
                    <div className="currentlyArrow clickable" id="recArrowRight">
                       <span className="arrow arrow-right icon-arrow-right"/>
                    </div>
                    <div className="currentlyArrow clickable"  id="recArrowUp">
                       <span className="arrow arrow-up icon-arrow-up"/>
                    </div>
                    <div className="currentlyArrow clickable"  id="recArrowDown">
                       <span className="arrow arrow-down icon-arrow-bottom"/>
                    </div>
                    <div className="opaque-scroll"></div>

                    <div className="pages"></div>
                    <table className="recorded-list">
                        <tbody>
                        <RecordingsTableRow
                            text="Ultimate Taekwondo"
                            date="27.04.2017 08:30"
                            channelName="FightBox"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="Watching the Hawks"
                            date="27.04.2017 08:29"
                            channelName="Russia Today"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="CNN Newsroom"
                            date="27.04.2017 08:00"
                            channelName="CNN"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="NinjaGo: Masters of Spinjitzu (The Titanium Ninja)"
                            date="27.04.2017 07:20"
                            channelName="Cartoon Network"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="My Knight and Me"
                            date="27.04.2017 06:55"
                            channelName="Boomerang"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="Grimsby"
                            date="05.04.2017 03:10"
                            channelName="HBO 3"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="Avengers"
                            date="12.03.2017 20:55"
                            channelName="HBO 2"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="Westworld (9)"
                            date="02.03.2017 00:25"
                            channelName="HBO 3"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="Krypto: The Superdog"
                            date="23.02.2017 10:55"
                            channelName="Boomerang"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="X-Men Origins: Wolverine"
                            date="08.12.2016 22:20"
                            channelName="Prima COOL"
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            focus={ this.props.focus }
                        />
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}