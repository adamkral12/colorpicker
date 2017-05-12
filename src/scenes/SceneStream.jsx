import React from 'react';
import Scene from '../core/Scene'
import PlayerButtonContainer from '../sceneComponents/sceneStream/PlayerButtonContainer';
import TimeFrame from '../sceneComponents/sceneStream/TimeFrame';
import SeekBar from '../sceneComponents/sceneStream/SeekBar';
import ChannelNumber from "../sceneComponents/sceneStream/ChannelNumber";
import LogoDropZone from '../core/LogoDropZone';
import ErrorContainer from '../core/ErrorContainer';


export default class SceneStream extends Scene {

    constructor(props) {
        super(props);
        this.handleDropAccepted = this.handleDropAccepted.bind(this);
        this.handleDropRejected = this.handleDropRejected.bind(this);
    }

    componentWillMount() {
        this.setState({ errorHidden: true });
    }

    handleDropRejected(errorMsg) {
        this.setState( { errorMsg: errorMsg });
        this.setState({ errorHidden: false });
    }

    handleDropAccepted(fileBase64) {
        this.setState( { errorMsg: "" });
        this.setState( { errorHidden: true });
        this.props.onLogoUpdate(fileBase64);
    }

    render () {
        this.state.hidden = !this.isSceneActive();
        const normalFont = this.getFontCSS(this.props.colorNormal).font;
        return (
            <div id={this.props.id}
                 className='scene'
                 style={ this.state.hidden ? { display: "none"} : { display: "block" }}
            >

                <ErrorContainer
                    hidden={ this.state.errorHidden }
                    text={ this.state.errorMsg }
                />

                <div id="snippet-player">
                    <div className="player">

                        <div className="content">

                            <SeekBar
                                colorNormal={ this.props.colorNormal }
                                colorFocused={ this.props.colorFocused }
                                focus={ this.props.focus }
                            />

                            <ChannelNumber
                                colorNormal={ this.props.colorNormal }
                                colorFocused={ this.props.colorFocused }
                                focus={ this.props.focus }
                            />

                            <table>
                                <tbody>
                                    <tr>
                                        <td className="channels channel1">HBO</td>
                                        <td className="titles title1"
                                            style={ normalFont }
                                        >
                                            <div>X-Men Origins:Wolverine</div>
                                        </td>
                                        <td className="time time1"
                                            style={ normalFont }
                                        >22:20 - 00:35
                                        </td>
                                    </tr>
                                    <tr className="secondRow">
                                        <td className="channels channel2">Following:</td>
                                        <td className="titles title2"
                                            style={ normalFont }
                                        >
                                            <div>The Matrix</div>
                                        </td>
                                        <td className="time time2"/>
                                    </tr>
                                </tbody>
                            </table>

                            <PlayerButtonContainer
                                colorNormal={ this.props.colorNormal }
                                colorFocused={ this.props.colorFocused }
                                colorDisabled={ this.props.colorDisabled }
                                focus={ this.props.focus }
                            />

                            <div className="logo">
                                <LogoDropZone
                                    colorDisabled={ this.props.colorDisabled }
                                    handleDropRejected={ this.handleDropRejected }
                                    handleDropAccepted={ this.handleDropAccepted }
                                />
                            </div>
                        </div>

                        <TimeFrame
                            colorNormal={ this.props.colorNormal }
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