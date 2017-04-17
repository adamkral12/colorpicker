import React, { Component } from 'react';
import SketchPicker from 'react-color';

export default class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
    };


    handleStylesChange = (color) => {
        this.props.onStylesChange(color);
        //this.setState({ color: color.rgb});
    };

    render() {

        const color = this.props.color;
        console.log("color =" + JSON.stringify(color));

        return (
            <div id="color-picker-container"
            >
                <SketchPicker
                    color={ color }
                    onChangeComplete={ this.handleStylesChange }
                />
            </div>
        );
    }
}