import React, { Component } from 'react';
import ViewPort from './core/ViewPort';
import ChooseSceneContainer from './core/ChooseSceneContainer';
import ColorPicker from "./core/ColorPicker";

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
    };


    state = {
        color: {
            rgb: {
                r: '241',
                g: '112',
                b: '19',
                a: '1'
            }
        }
    };

    handleStylesChange(color) {
        this.setState({ color: color});
    };

    render () {
        const color = this.state.color;


        return (
          <div id="container">
              <ChooseSceneContainer />
              <ViewPort
                  onStylesChange={ this.handleStylesChange }
                  color={this.state.color}
              />
              <ColorPicker
                  color={ color }
                  onStylesChange={ this.handleStylesChange }
              />
          </div>
        );
    }
}