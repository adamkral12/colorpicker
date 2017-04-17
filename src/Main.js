import React, { Component } from 'react';
import ViewPort from './core/ViewPort';
import ChooseSceneContainer from './core/ChooseSceneContainer';
import ColorPicker from "./core/ColorPicker";

export default class Main extends Component {
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