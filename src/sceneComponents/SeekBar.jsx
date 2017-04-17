import React, { Component } from 'react';
import reactCSS from 'reactcss';


export default class SeekBar extends Component {


    render() {

        var styles = reactCSS({
            'default': {
                color: {
                    background: `rgba(${ this.props.color.rgb.r },
                              ${ this.props.color.rgb.g },
                              ${ this.props.color.rgb.b },
                              ${ this.props.color.rgb.a })`
                }
            }});

        return (
            <div className="bar">
                <div className="progress clickable"
                     data-value="progress"
                     style={ styles.color }
                ></div>
                <div className="actual"></div>
            </div>
        );
    }
}