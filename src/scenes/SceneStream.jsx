import React from 'react';
import Scene from '../core/Scene'
import PlayerButtonContainer from '../sceneComponents/PlayerButtonContainer';
import TimeFrame from '../sceneComponents/TimeFrame';
import SeekBar from '../sceneComponents/SeekBar';
import ChannelNumber from "../sceneComponents/ChannelNumber";

export default class SceneStream extends Scene {

    render () {
        return (
            <div id={this.props.id} className='scene'>

                <div id="snippet-player">
                    <div className="player">

                        <div className="content">

                            <SeekBar
                                onChangeComplete={ this.handleStylesChange }
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />

                            <ChannelNumber
                                onChangeComplete={ this.handleStylesChange }
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />

                            <table>
                                <tr>
                                    <td className="channels channel1">HBO</td>
                                    <td className="titles title1"><div>X-Men Origins:Wolverine</div></td>
                                    <td className="time time1">22:20 - 00:35</td>
                                </tr>
                                <tr className="secondRow">
                                    <td className="channels channel2">Following:</td>
                                    <td className="titles title2"><div>The Matrix</div></td>
                                    <td className="time time2"></td>
                                </tr>
                            </table>

                            <PlayerButtonContainer
                                onChangeComplete={ this.handleStylesChange }
                                color={ this.props.color }
                                focus={ this.props.focus }
                            />

                            <div className="logo"></div>
                        </div>

                        <TimeFrame
                            onChangeComplete={ this.handleStylesChange }
                            color={ this.props.color }
                            focus={ this.props.focus }
                        />

                        <div  className="opaque"/>
                    </div>

                </div>
            </div>
        );
    }
}