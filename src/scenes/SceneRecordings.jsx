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
                    focus={ this.props.focus }
                />


                <div id="snippet-recorded-info">
                    <div className="info-event">
                        <div className="eventName text"></div>
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
                                                channelName="HBO 3"
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }

                                            />
                                            <RecordingsTableRow
                                                channelName="HBO 3"
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }

                                            />
                                            <RecordingsTableRow
                                                channelName="HBO 3"
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }

                                            />
                                            <RecordingsTableRow
                                                channelName="HBO 3"
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }

                                            />
                                            <RecordingsTableRow
                                                channelName="HBO 3"
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }

                                            />
                                        </tbody>
                                    </table>

                </div>

            </div>
        )
    }
}