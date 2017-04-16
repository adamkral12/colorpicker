import ViewPort from './components/core/ViewPort.jsx';
import SceneStream from './components/scenes/SceneStream.jsx';
import ChooseSceneContainer from './components/core/ChooseSceneContainer.jsx';

export default class Main extends React.Component {
    render () {
        return (
          <div id="container">
              <ChooseSceneContainer />
              <ViewPort />
          </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementsByTagName('body')[0]
);