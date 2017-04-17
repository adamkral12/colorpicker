import React, { Component } from 'react';
import reactCSS from 'reactcss';
import SketchPicker from 'react-color';

export default class ColorPicker extends Component {
    state = {
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1'
        }
    };

    handleChangeComplete = (color) => {

        this.setState({ color: color.rgb});
    };

    render() {
        console.log(this.state.color.r);
        const styles = reactCSS({
            'default': {
                color: {
                    background: `rgba(${ this.state.color.r },
                              ${ this.state.color.g },
                              ${ this.state.color.b },
                              ${ this.state.color.a })`
                }
        }});

        console.log(styles);

        return (
            <div id="color-picker-container"
                 style={ styles.color }
            >
                <SketchPicker
                    color={ this.state.color }
                    onChangeComplete={ this.handleChangeComplete }
                />
            </div>
        );
    }
}