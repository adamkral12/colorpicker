import React from 'react';
import Scene from '../core/Scene'
import PlayerButtonContainer from '../sceneComponents/sceneStreamComponents/PlayerButtonContainer';
import TimeFrame from '../sceneComponents/sceneStreamComponents/TimeFrame';
import SeekBar from '../sceneComponents/sceneStreamComponents/SeekBar';
import ChannelNumber from "../sceneComponents/sceneStreamComponents/ChannelNumber";

export default class SceneStream extends Scene {

    render () {
        if (!this.isSceneActive()) {
            this.state.hidden = true;
        } else {
            this.state.hidden = false;
        }
        return (
            <div id={this.props.id}
                 className='scene'
                 style={ this.state.hidden ? { display: "none"} : { display: "block" }}
            >

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
                                <tbody>
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
                                </tbody>
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