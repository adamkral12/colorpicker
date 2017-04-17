import ViewPort from 'core/ViewPort.jsx';
import ChooseSceneContainer from 'core/ChooseSceneContainer.jsx';
import ColorPicker from "core/ColorPicker.jsx";
import React from "react";

export default class Main extends React.Component {
    render () {
        return (
          <div id="container">
              <ChooseSceneContainer />
              <ViewPort />
              <ColorPicker />
          </div>
        );
    }
}