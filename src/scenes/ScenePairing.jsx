import Scene from "../core/Scene.jsx";
export default class ScenePairing extends Scene {
    render () {
        return (
            <div id="scene-pairing" className="scene">
                <div class="logo"></div>
                <div class="info">
                    <h1></h1>
                    <p></p>
                </div>
                <div id="snippet-code">
                    <div class="codes pairing_code">
                        <h1></h1>
                        <div class="numbers pairing_code_num"></div>
                    </div>
                    <div class="codes validity">
                        <h1></h1>
                        <div class="numbers validity_time"></div>
                    </div>
                </div>
                <div class="url"></div>
            </div>
        )
    };
}