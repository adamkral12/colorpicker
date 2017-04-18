import React, { Component } from 'react';
import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
import RCButtons from "../sceneComponents/RCButtons.jsx";

export default class Container extends Component {

    render() {
        return (
            <div id="viewport">
                <SceneStream id="scene-stream"
                             onChangeComplete={ this.handleStylesChange }
                             color={ this.props.color }
                />
                <ScenePairing id="scene-pairing"/>
                <RCButtons />
            </div>
        );
    }
}