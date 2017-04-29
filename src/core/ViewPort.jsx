import React, { Component } from 'react';
import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
import SceneConfiguration from "../scenes/SceneConfiguration.jsx";
import SceneCurrently from "../scenes/SceneCurrently";
import SceneRecordings from "../scenes/SceneRecordings";
import SceneEPG from "../scenes/SceneEPG";
import SceneMenu from "../scenes/SceneMenu";
import RCButtons from "../sceneComponents/sceneStream/RCButtons.jsx";

export default class Container extends Component {

    render() {
        console.log('Viewport font = ' + JSON.stringify(this.props.colorNormal));
        return (
            <div id="viewport">
                <SceneStream id="scene-stream"
                             onChangeComplete={ this.handleStylesChange }
                             activeSceneIndex={ this.props.activeSceneIndex }
                             color={ this.props.color }
                             colorFocused={ this.props.colorFocused }
                             focus={ this.props.focus }
                             index={0}
                             key={0}
                />
                <ScenePairing id="scene-pairing"
                              onChangeComplete={ this.handleStylesChange }
                              activeSceneIndex={ this.props.activeSceneIndex }
                              color={ this.props.color }
                              colorFocused={ this.props.colorFocused }
                              colorNormal={ this.props.colorNormal }
                              focus={ this.props.focus }
                              index={1}
                              key={1}
                />
                <SceneConfiguration id="scene-configuration"
                              onChangeComplete={ this.handleStylesChange }
                              activeSceneIndex={ this.props.activeSceneIndex }
                              color={ this.props.color }
                              colorFocused={ this.props.colorFocused }
                              focus={ this.props.focus }
                              index={2}
                              key={2}
                />
                <SceneCurrently id="scene-currently"
                                    onChangeComplete={ this.handleStylesChange }
                                    activeSceneIndex={ this.props.activeSceneIndex }
                                    color={ this.props.color }
                                    colorFocused={ this.props.colorFocused }
                                    focus={ this.props.focus }
                                    index={3}
                                    key={3}
                />
                <SceneRecordings id="scene-recordings"
                                onChangeComplete={ this.handleStylesChange }
                                activeSceneIndex={ this.props.activeSceneIndex }
                                color={ this.props.color }
                                colorFocused={ this.props.colorFocused }
                                focus={ this.props.focus }
                                index={4}
                                key={4}
                />
                <SceneEPG id="scene-epg"
                          onChangeComplete={ this.handleStylesChange }
                          activeSceneIndex={ this.props.activeSceneIndex }
                          color={ this.props.color }
                          colorFocused={ this.props.colorFocused }
                          colorDisabled={ this.props.colorDisabled }
                          colorNormal={ this.props.colorNormal }
                          focus={ this.props.focus }
                          index={5}
                          key={5}
                />
                <SceneMenu id="scene-menu"
                          onChangeComplete={ this.handleStylesChange }
                          activeSceneIndex={ this.props.activeSceneIndex }
                          color={ this.props.color }
                          colorFocused={ this.props.colorFocused }
                          focus={ this.props.focus }
                          index={6}
                          key={6}
                />
                <RCButtons
                    activeSceneIndex={ this.props.activeSceneIndex }
                />
            </div>
        );
    }
}