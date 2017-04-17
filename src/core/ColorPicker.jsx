import React, { Component } from 'react';
import SketchPicker from 'react-color';

export default class ColorPicker extends Component {
    state = {
        background: '#fff',
    };

    handleChangeComplete = (color) => {
        this.rgba = "rgba(" +
            + color.rgb.r + "," +
            + color.rgb.g + "," +
            + color.rgb.b + "," +
            + color.rgb.a + ")";
        this.setState({ background: this.rgba});
    };

    render() {
        return (
            <div id="color-picker-container"
                 style={ {backgroundColor: this.rgba} }
            >
                <SketchPicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChangeComplete }
                />
            </div>
        );
    }
}