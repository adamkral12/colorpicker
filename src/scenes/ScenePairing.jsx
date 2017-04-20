import React from 'react';
import Scene from "../core/Scene";
import PairingBackground from '../sceneComponents/scenePairingComponents/PairingBackground';

export default class ScenePairing extends Scene {

    render () {
        if (!this.isSceneActive()) {
            return this.renderNothing();
        }
        
        return (
            <div id="scene-pairing2" className="scene">
                <PairingBackground />
            </div>
        )
    };
}