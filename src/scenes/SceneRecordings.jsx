import React from 'react';
import Scene from '../core/Scene';
import Panelheader from '../sceneComponents/sceneConfiguration/PanelHeader';
import RecordingsTableRow from '../sceneComponents/sceneRecords/RecordignsTableRow';

export default class SceneRecordings extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();

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


                <div id="snippet-recorded-info">
                    <div className="info-event">
                        <div className="eventName text">Westworld (9)</div>
                        <div className="eventInfo">
                            <table className="info-event">
                                <tbody>
                                <tr className="row">
                                        <th>
                                            <div className="length text">Length: </div>
                                        </th>
                                        <td>
                                            <div className="lengthValue text">01:25</div>
                                        </td>
                                    </tr>
                                    <tr className="row">
                                        <th>
                                            <div className="validity text">Validity: </div>
                                        </th>
                                        <td>
                                            <div className="validityValue text">3 months</div>
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
                                    <th><div className="freeCapacity text">Free capacity: </div></th>
                                    <td><div className="freeCapacityValue text">6h 12m</div></td>
                                </tr>
                                <tr className="row">
                                    <th><div className="totalCapacity text">Total capacity: </div></th>
                                    <td><div className="totalCapacityValue text">10h 00m</div></td>
                                </tr>
                                <tr className="row">
                                    <th><div className="countOfRecorded text">Number of events: </div></th>
                                    <td><div className="countOfRecordedValue text">5</div></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div id="snippet-recorded-list">

                    <div className="player-clickable clickable" data-value="stream"></div>
                    <div className="emptyList"></div>

                    <div className="currentlyArrow clickable" data-value="left" id="recArrowLeft">
                       <span className="arrow arrow-left icon-arrow-left"/>
                    </div>
                    <div className="currentlyArrow clickable" data-value="right" id="recArrowRight">
                       <span className="arrow arrow-right icon-arrow-right"/>
                    </div>
                    <div className="currentlyArrow clickable" data-value="up" id="recArrowUp">
                       <span className="arrow arrow-up icon-arrow-up"/>
                    </div>
                    <div className="currentlyArrow clickable" data-value="down" id="recArrowDown">
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
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="Watching the Hawks"
                            date="27.04.2017 08:29"
                            channelName="Russia Today"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="CNN Newsroom"
                            date="27.04.2017 08:00"
                            channelName="CNN"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="NinjaGo: Masters of Spinjitzu (The Titanium Ninja)"
                            date="27.04.2017 07:20"
                            channelName="Cartoon Network"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                            focus={ this.props.focus }
                        />
                        <RecordingsTableRow
                            text="My Knight and Me"
                            date="27.04.2017 06:55"
                            channelName="Boomerang"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                        />
                        <RecordingsTableRow
                            text="Grimsby"
                            date="05.04.2017 03:10"
                            channelName="HBO 3"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                        />
                        <RecordingsTableRow
                            text="Avengers"
                            date="12.03.2017 20:55"
                            channelName="HBO 2"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                        />
                        <RecordingsTableRow
                            text="Westworld (9)"
                            date="02.03.2017 00:25"
                            channelName="HBO 3"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                        />
                        <RecordingsTableRow
                            text="Krypto: The Superdog"
                            date="23.02.2017 10:55"
                            channelName="Boomerang"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                        />
                        <RecordingsTableRow
                            text="X-Men Origins: Wolverine"
                            date="08.12.2016 22:20"
                            channelName="Prima COOL"
                            color={ this.props.color }
                            colorNormal={ this.props.colorNormal }
                            colorFocused={ this.props.colorFocused }
                        />
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}