import SceneStream from "../scenes/SceneStream.jsx";
import ScenePairing from "../scenes/ScenePairing.jsx";
export default class Container extends React.Component {
    render() {
        return (
            <div id="viewport">
                <SceneStream />
                <ScenePairing />
            </div>
        );
    }
}