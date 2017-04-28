import React from 'react';
import Scene from '../core/Scene';
import PanelHeader from '../sceneComponents/sceneConfiguration/PanelHeader';
import EPGChannel from '../sceneComponents/sceneEPG/EPGChannel';

export default class SceneEPG extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();

        return (
            <div id="scene-epg"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" } }
            >
                <PanelHeader
                    text="EPG"
                    color={ this.props.color }
                    focus={ this.props.focus }
                />

                <div id="snippet-program-guide">

                    <div id="epgEventInfo">
                        <h3 id="epgEventTitle">CNNMoney View with Nina Dos Santos</h3>
                        <div id="epgEventTime">CNN, Today 12:00–13:00</div>
                        <div id="epgEventDescription"></div>
                    </div>

                    <div className="player-clickable clickable"></div>

                    <div id="epgTable">
                        <div id="epgTimeLine">
                            <div className="timeInterval" style={ {left: 113.516666666667 + "px"} }> 11:30</div>
                            <div className="timeInterval" style={ {left: 275.683333333333 + "px"} }> 12:00</div>
                            <div className="timeInterval" style={ {left: 437.85 + "px"} }> 12:30</div>
                            <div className="timeInterval" style={ {left: 600.016666666667 + "px"} }> 13:00</div>
                            <div className="timeInterval" style={ {left: 762.183333333333 + "px"} }> 13:30</div>
                        </div>

                        <div id="epgNow" style={ {left: 670.642314814815 + "px"} }>
                            <div id="epgNowTime">12:26</div>
                        </div>

                        <div id="epgChannelChangeInput"></div>
                        <div className="epgArrow clickable" id="epgArrowLeft">
                            <span className="arrow arrow-left icon-arrow-left"/>
                        </div>
                        <div className="epgArrow clickable" id="epgArrowRight">
                            <span className="arrow arrow-right icon-arrow-right"/>
                        </div>
                        <div className="epgArrow clickable disabled" id="epgArrowUp">
                            <span className="arrow arrow-up icon-arrow-up"/>
                        </div>
                        <div className="epgArrow clickable" id="epgArrowDown">
                            <span className="arrow arrow-down icon-arrow-bottom"/>
                        </div>

                        <EPGChannel
                            id="channel_FightboxHD"
                            index={1}
                            key={1}
                            channelName="FightBox"
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                            numberOfEvents={5}
                            eventNow={2}
                            events={['World Series of Boxing - WSB', 'OZ Academy', 'Ultimate Taekwondo', 'Osaka Funny Wrestling', 'King of Kings Heroes Grand Prix']}
                        />

                        <EPGChannel
                            id="channel_boomerang"
                            index={2}
                            key={2}
                            channelName="Boomerang"
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                            numberOfEvents={6}
                            eventNow={3}
                            events={['The Flintstones (Kleptomaniac Pebbles)', 'Tom &amp; Jerry Tales', 'Tom &amp; Jerry Tales',
                                'Be Cool, Scooby-Doo! (Be Cold, Scooby-Doo!)', 'Bunnicula', 'The Garfield Show']
                            }
                        />

                        <EPGChannel
                            id="channel_cartoon"
                            index={3}
                            key={3}
                            channelName="Cartoon Network"
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                            numberOfEvents={6}
                            eventNow={0}
                            events={['Cartoon Toon Toon: The Marvelous Misadventures of Flapjack', 'The Amazing World of Gumball - Elements (Ghost, The)', 'Mighty Magiswords - Season 1 (Champions of Breakfast)',
                                'NinjaGo: Masters of Spinjitzu (The Invitation)', 'NEW! Ninjago - Masters of Spinjitzu', 'Ben 10']
                            }
                        />

                        <EPGChannel
                            id="channel_cnn"
                            index={4}
                            key={4}
                            channelName="CNN"
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                            numberOfEvents={6}
                            eventNow={2}
                            events={['Amanpour.', 'CNN World Rugby', 'CNNMoney View with Nina Dos Santos',
                                'CNN Newsroom', 'World Sport', 'News Stream (with World Sport)']
                            }
                        />

                        <EPGChannel
                            id="channel_russiatoday"
                            index={5}
                            key={5}
                            channelName="Russia Today"
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                            numberOfEvents={7}
                            eventNow={2}
                            events={['Headline News', 'Keiser Report', 'Headline News',
                                'Documentary', 'Headline News', 'Watching the Hawks', 'Headline News']
                            }
                        />


                        <EPGChannel
                            id="channel_golf"
                            index={6}
                            key={6}
                            channelName="Golf Channel"
                            color={ this.props.color }
                            colorFocused={ this.props.colorFocused }
                            colorDisabled={ this.props.colorDisabled }
                            colorNormal={ this.props.colorNormal }
                            focus={ this.props.focus }
                            numberOfEvents={4}
                            eventNow={1}
                            events={['Valero Texas Open', 'United Leasing &amp; Finance Championships', 'Golf Central',
                                'Valero Texas Open' ]
                            }
                        />

                    </div>
                </div>

            </div>
        )
    }
}