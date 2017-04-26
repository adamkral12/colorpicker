import React from 'react';
import Scene from '../core/Scene';
import Panelheader from '../sceneComponents/sceneConfigurationComponents/PanelHeader';

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
                                <tbody><tr className="row">
                                    <th><div className="length text"></div></th>
                                    <td><div className="lengthValue text"></div></td>
                                </tr>
                                <tr className="row">
                                    <th><div className="validity text"></div></th>
                                    <td><div className="validityValue text"></div></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="info">
                        <table className="info">
                            <tbody><tr className="row">
                                <th><div className="freeCapacity text"></div></th>
                                <td><div className="freeCapacityValue text"></div></td>
                            </tr>
                            <tr className="row">
                                <th><div className="totalCapacity text"></div></th>
                                <td><div className="totalCapacityValue text"></div></td>
                            </tr>
                            <tr className="row">
                                <th><div className="countOfRecorded text"></div></th>
                                <td><div className="countOfRecordedValue text"></div></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div id="snippet-recorded-list">

                    <div className="player-clickable clickable" data-value="stream"></div>

                    <div className="emptyList"></div>
                                    <div className="currentlyArrow clickable" data-value="left" id="recArrowLeft"><span className="arrow arrow-left icon-arrow-left"></span></div>
                                    <div className="currentlyArrow clickable" data-value="right" id="recArrowRight"><span className="arrow arrow-right icon-arrow-right"></span></div>
                                    <div className="currentlyArrow clickable" data-value="up" id="recArrowUp"><span className="arrow arrow-up icon-arrow-up"></span></div>
                                    <div className="currentlyArrow clickable" data-value="down" id="recArrowDown"><span className="arrow arrow-down icon-arrow-bottom"></span></div>
                                    <div className="opaque-scroll"></div>

                                    <div className="pages"></div>
                                    <table className="recorded-list">
                                        <tbody>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">HBO 3</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                </div>

            </div>
        )
    }
}