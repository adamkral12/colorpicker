import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
import RCButtons from "../sceneComponents/RCButtons.jsx";

export default class Container extends React.Component {
    render() {
        return (
            <div id="viewport">
                <SceneStream id="scene-stream"/>
                <ScenePairing id="scene-pairing"/>
                <RCButtons />
            </div>
        );
    }
}