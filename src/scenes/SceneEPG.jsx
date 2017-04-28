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
                            focus={ this.props.focus }
                            numberOfEvents={5}
                            eventNow={2}
                            events={['World Series of Boxing - WSB', 'OZ Academy', 'Ultimate Taekwondo', 'Osaka Funny Wrestling', 'King of Kings Heroes Grand Prix']}
                        />

                        <div className="channel" id="channel_boomerang">
                            <div className="channelBox" id="channelBox_boomerang">
                                <div className="channelIndex">2</div>
                                <div className="channelName"> Boomerang</div>
                            </div>
                            <div id="event_boomerang-0" className="event focusable playable ">The Flintstones (Kleptomaniac Pebbles)</div>
                            <div id="event_boomerang-1" className="event focusable playable " >Tom &amp; Jerry Tales</div>
                            <div id="event_boomerang-2" className="event focusable playable " >Tom &amp; Jerry Tales</div>
                            <div id="event_boomerang-3" className="event focusable playable now" >Be Cool, Scooby-Doo! (Be Cold, Scooby-Doo!)</div>
                            <div id="event_boomerang-4" className="event focusable playable future " >Bunnicula</div>
                            <div id="event_boomerang-5" className="event focusable playable future " >The Garfield Show</div>
                        </div>

                        <div className="channel" id="channel_cartoon" >
                            <div className="channelBox" id="channelBox_cartoon">
                                <div className="channelIndex">3</div>
                                <div className="channelName"> Cartoon Network</div>
                            </div>
                            <div id="event_cartoon-0" className="event focusable playable now" >Cartoon Toon Toon: The Marvelous Misadventures of Flapjack</div>
                            <div id="event_cartoon-1" className="event focusable playable future " >The Amazing World of Gumball - Elements (Ghost, The)</div>
                            <div id="event_cartoon-2" className="event focusable playable future " >Mighty Magiswords - Season 1 (Champions of Breakfast)</div>
                            <div id="event_cartoon-3" className="event focusable playable future " >NinjaGo: Masters of Spinjitzu (The Invitation)</div>
                            <div id="event_cartoon-4" className="event focusable playable future " >NEW! Ninjago - Masters of Spinjitzu</div>
                            <div id="event_cartoon-5" className="event focusable playable future " >Ben 10</div>
                        </div>

                        <div className="channel focus" id="channel_cnn" >
                            <div className="channelBox" id="channelBox_cnn">
                                <div className="channelIndex">4</div>
                                <div className="channelName"> CNN</div>
                            </div>
                            <div id="event_cnn-0" className="event focusable playable " >Amanpour.</div>
                            <div id="event_cnn-1" className="event focusable playable " >CNN World Rugby</div>
                            <div id="event_cnn-2" className="event focusable playable now focus" >CNNMoney View with Nina Dos Santos</div>
                            <div id="event_cnn-3" className="event focusable playable future" >CNN Newsroom</div>
                            <div id="event_cnn-4" className="event focusable playable future " >World Sport</div>
                            <div id="event_cnn-5" className="event focusable playable future " >News Stream (with World Sport)</div>
                        </div>

                        <div className="channel" id="channel_russiatoday" >
                            <div className="channelBox" id="channelBox_russiatoday">
                                <div className="channelIndex">5</div>
                                <div className="channelName"> Russia Today</div>
                            </div>
                            <div id="event_russiatoday-0" className="event focusable playable " >Headline News</div>
                            <div id="event_russiatoday-1" className="event focusable playable " >Keiser Report</div>
                            <div id="event_russiatoday-2" className="event focusable playable now " >Headline News</div>
                            <div id="event_russiatoday-3" className="event focusable playable future " >Documentary</div>
                            <div id="event_russiatoday-4" className="event focusable playable future " >Headline News</div>
                            <div id="event_russiatoday-5" className="event focusable playable future " >Watching the Hawks</div>
                            <div id="event_russiatoday-6" className="event focusable playable future " >Headline News</div>
                        </div>

                        <div className="channel" id="channel_golf" >
                            <div className="channelBox" id="channelBox_golf">
                                <div className="channelIndex">6</div>
                                <div className="channelName"> Golf Channel</div>
                            </div>
                            <div id="event_golf-0" className="event focusable playable " >Valero Texas Open</div>
                            <div id="event_golf-1" className="event focusable playable now " >United Leasing &amp; Finance Championships</div>
                            <div id="event_golf-2" className="event focusable playable future " >Golf Central</div>
                            <div id="event_golf-3" className="event focusable playable future " >Valero Texas Open</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}