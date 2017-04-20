import React from 'react';
import Scene from "../core/Scene";

export default class ScenePairing extends Scene {

    render () {
        if (!this.isSceneActive()) {
            return this.renderNothing();
        }
        
        return (
            <div id="scene-pairing" className="scene">
                <div className="logo"></div>
                <div className="info">
                    <h1></h1>
                    <p></p>
                </div>
                <div id="snippet-code">
                    <div className="codes pairing_code">
                        <h1></h1>
                        <div className="numbers pairing_code_num"></div>
                    </div>
                    <div className="codes validity">
                        <h1></h1>
                        <div className="numbers validity_time"></div>
                    </div>
                </div>
                <div className="url"></div>
            </div>
        )
    };
}