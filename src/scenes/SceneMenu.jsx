import React from 'react';
import Scene from '../core/Scene';
import MenuButton from  '../sceneComponents/mainMenu/MenuButton';

export default class SceneMenu extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();

        return (
            <div id="snippet-main-menu"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" } }
            >
                <ul className="list">
                    <MenuButton
                        classes="actual icon-menu_currently"
                        numberOfPaths={6}
                        wrapperClass="menuCurrently"
                        wrapperText="CURRENTLY"
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                    <MenuButton
                        classes="epg icon-menu_epg"
                        numberOfPaths={7}
                        wrapperClass="menuEPG"
                        wrapperText="EPG"
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                    <MenuButton
                        classes="recorded icon-menu_records"
                        numberOfPaths={6}
                        wrapperClass="menuRecorded"
                        wrapperText="RECORDINGS"
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                    <MenuButton
                        classes="last icon-menu_last_playback"
                        numberOfPaths={5}
                        wrapperClass="menuLatestPlay"
                        wrapperText="LAST PLAYBACK"
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                    <MenuButton
                        classes="settings icon-menu_settings"
                        numberOfPaths={7}
                        wrapperClass="menuConfiguration"
                        wrapperText="SETTINGS"
                        color={ this.props.color }
                        colorFocused={ this.props.colorFocused }
                        focus={ this.props.focus }
                    />
                </ul>
            </div>
        )
    }
}