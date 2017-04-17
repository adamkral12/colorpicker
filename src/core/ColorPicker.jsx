import React, { Component } from 'react';
//import SketchPicker from './../../bundler/node_modules/react-color/lib/components/sketch/Sketch';

export default class ColorPicker extends Component {
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <div id="color-picker-container">

            </div>
        );
    }
}