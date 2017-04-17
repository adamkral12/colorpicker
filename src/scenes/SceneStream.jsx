import React from 'react';
import Scene from '../core/Scene'
import PlayerButtonContainer from '../sceneComponents/PlayerButtonContainer';
import SeekBar from '../sceneComponents/SeekBar';

export default class SceneStream extends Scene {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
    };


    handleStylesChange = (color) => {
        this.props.onStylesChange(color);
    };

    render () {
        return (
            <div id={this.props.id} className='scene'>

                <div id="snippet-player">
                    <div className="player">

                        <div className="content">
                            <SeekBar
                                onChangeComplete={ this.handleStylesChange }
                                color={ this.props.color }
                            />
                            <div className="channel-number"><div className="text">01</div></div>
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
                            />
                            <div className="logo"></div>
                        </div>

                        <div id="timeframe" className="focusable">
                            <div className="icon-timeframe">
                                <span className="time">23:10</span>
                                <span className="path1"></span>
                                <span className="path2"></span>
                            </div>
                        </div>
                        <div  className="opaque"/>
                    </div>

                </div>
            </div>
        );
    }
}