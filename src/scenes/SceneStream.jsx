import React from 'react';
import Scene from '../core/Scene'
import PlayerButtonContainer from '../sceneComponents/sceneStream/PlayerButtonContainer';
import TimeFrame from '../sceneComponents/sceneStream/TimeFrame';
import SeekBar from '../sceneComponents/sceneStream/SeekBar';
import ChannelNumber from "../sceneComponents/sceneStream/ChannelNumber";

export default class SceneStream extends Scene {
    

    render () {
        this.state.hidden = !this.isSceneActive();

        return (
            <div id={this.props.id}
                 className='scene'
                 style={ this.state.hidden ? { display: "none"} : { display: "block" }}
            >

                <div id="snippet-player">
                    <div className="player">

                        <div className="content">

                            <SeekBar
                                color={ this.props.color }
                                colorFocused={ this.props.colorFocused }
                                focus={ this.props.focus }
                            />

                            <ChannelNumber
                                color={ this.props.color }
                                colorFocused={ this.props.colorFocused }
                                focus={ this.props.focus }
                            />

                            <table>
                                <tbody>
                                    <tr>
                                        <td className="channels channel1">HBO</td>
                                        <td className="titles title1"><div>X-Men Origins:Wolverine</div></td>
                                        <td className="time time1">22:20 - 00:35</td>
                                    </tr>
                                    <tr className="secondRow">
                                        <td className="channels channel2">Following:</td>
                                        <td className="titles title2"><div>The Matrix</div></td>
                                        <td className="time time2"/>
                                    </tr>
                                </tbody>
                            </table>

                            <PlayerButtonContainer
                                color={ this.props.color }
                                colorFocused={ this.props.colorFocused }
                                focus={ this.props.focus }
                            />

                            <div className="logo"></div>
                        </div>

                        <TimeFrame
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            focus={ this.props.focus }
                        />

                        <div  className="opaque"/>
                    </div>

                </div>
            </div>
        );
    }
}