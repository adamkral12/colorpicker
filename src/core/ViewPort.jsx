import React, { Component } from 'react';
import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
import SceneConfiguration from "../scenes/SceneConfiguration.jsx";
import SceneCurrently from "../scenes/SceneCurrently";
import SceneRecordings from "../scenes/SceneRecordings";
import RCButtons from "../sceneComponents/sceneStreamComponents/RCButtons.jsx";

export default class Container extends Component {

    render() {
        console.log('Viewport font = ' + JSON.stringify(this.props.font));
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
                <SceneConfiguration id="scene-configuration"
                              onChangeComplete={ this.handleStylesChange }
                              activeSceneIndex={ this.props.activeSceneIndex }
                              color={ this.props.color }
                              focus={ this.props.focus }
                              index={2}
                              key={2}
                />
                <SceneCurrently id="scene-currently"
                                    onChangeComplete={ this.handleStylesChange }
                                    activeSceneIndex={ this.props.activeSceneIndex }
                                    color={ this.props.color }
                                    focus={ this.props.focus }
                                    index={3}
                                    key={3}
                />
                <SceneRecordings id="scene-recordings"
                                onChangeComplete={ this.handleStylesChange }
                                activeSceneIndex={ this.props.activeSceneIndex }
                                color={ this.props.color }
                                focus={ this.props.focus }
                                index={4}
                                key={4}
                />
                <RCButtons
                    activeSceneIndex={ this.props.activeSceneIndex }
                />
            </div>
        );
    }
}