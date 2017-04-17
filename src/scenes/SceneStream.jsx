import React from 'react';
import Scene from '../core/Scene'
import Button from '../core/Button';
import SeekBar from '../sceneComponents/SeekBar';

export default class SceneStream extends Scene {
    
    componentWillMount() {
        super.componentWillMount();
    }

    render () {
        return (
            <div id={this.props.id} className='scene'>

                <div id="snippet-player">
                    <div className="player">

                        <div className="content">
                            <SeekBar />
                            <div className="channel-number"><div className="text"></div></div>
                            <table>
                                <tr>
                                    <td className="channels channel1"></td>
                                    <td className="titles title1"><div></div></td>
                                    <td className="time time1"></td>
                                </tr>
                                <tr className="secondRow">
                                    <td className="channels channel2"></td>
                                    <td className="titles title2"><div></div></td>
                                    <td className="time time2"></td>
                                </tr>
                            </table>
                            <ul className="buttons">
                                <Button className="button-play"
                                        data-value="play"
                                        text="Play"
                                        iconClassName="icon-play3"
                                />
                                <Button className="button-back"
                                        data-value="back"
                                        text="Startover"
                                        iconClassName="icon-previous2"
                                />
                                <Button className="button-record"
                                        data-value="record"
                                        text="Record"
                                        iconClassName="record"
                                />
                                <Button className="button-live"
                                        data-value="live"
                                        text="Live"
                                        iconClassName="icon-play3"
                                />
                                <Button className="button-previous"
                                        data-value="prev"
                                        text="Previous"
                                        iconClassName="icon-backward2"
                                />
                                <Button className="button-next"
                                        data-value="next"
                                        text="Next"
                                        iconClassName="icon-forward3"
                                />
                            </ul>
                            <div className="logo"></div>
                        </div>

                        <div id="timeframe" className="focusable">
                            <div className="icon-timeframe">
                                <span className="time"></span>
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}