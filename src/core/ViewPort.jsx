import React, { Component } from 'react';
import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
import RCButtons from "../sceneComponents/RCButtons.jsx";

export default class Container extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
    };


    handleStylesChange = (color) => {
        this.props.onStylesChange(color);
    };

    render() {
        console.log('View port color = ' + this.props.color);
        return (
            <div id="viewport">
                <SceneStream id="scene-stream"
                             onStylesChange={ this.handleStylesChange }
                             color={ this.props.color }
                />
                <ScenePairing id="scene-pairing"/>
                <RCButtons />
            </div>
        );
    }
}