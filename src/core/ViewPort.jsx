import React, { Component } from 'react';
import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
import RCButtons from "../sceneComponents/sceneStreamComponents/RCButtons.jsx";

export default class Container extends Component {

    render() {
        return (
            <div id="viewport">
                <SceneStream id="scene-stream"
                             onChangeComplete={ this.handleStylesChange }
                             activeSceneIndex={ this.props.activeSceneIndex }
                             color={ this.props.color }
                             focus={ this.props.focus }
                             index={0}
                             key={0}
                />
                <ScenePairing id="scene-pairing"
                              onChangeComplete={ this.handleStylesChange }
                              activeSceneIndex={ this.props.activeSceneIndex }
                              color={ this.props.color }
                              focus={ this.props.focus }
                              index={1}
                              key={1}
                />
                <RCButtons />
            </div>
        );
    }
}