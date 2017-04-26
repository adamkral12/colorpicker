import React, { Component } from 'react';
import { SketchPicker } from 'react-color';

export default class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
    };

    componentWillMount() {
        this.setState({ font: this.props.color.font });
    }


    handleStylesChange = (styles) => {
        console.log('ColorPicker Handle style change styles = ' + JSON.stringify(styles));

        const nextStyles = {
            rgb: styles.rgb,
            font: this.state.font
        };
        console.log('ColorPicker Handle style change, nextStyles = ' + JSON.stringify(nextStyles));
        this.props.onStylesChange(nextStyles);
    };

    render() {
        console.log('ColorPicker props = ' + JSON.stringify(this.props.color));
        const color = this.props.color;

        return (
            <div id="color-picker-container"
            >
                <SketchPicker
                    color={ color.rgb }
                    width={320}
                    onChangeComplete={ this.handleStylesChange }
                />
            </div>
        );
    }
}