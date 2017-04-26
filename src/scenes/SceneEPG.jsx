import React from 'react';
import Scene from '../core/Scene';
import PanelHeader from '../sceneComponents/sceneConfiguration/PanelHeader';

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

            </div>
        )
    }
}