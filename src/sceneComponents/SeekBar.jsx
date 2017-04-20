import React from 'react';
import Button from '../core/Button';

export default class SeekBar extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = false;
    };

    render() {
        var styles = this.getStyles();

        return (
            <div className="bar">
                <div className="progress clickable"
                     data-value="progress"
                     style={ styles.noOpacity }
                ></div>
                <div className="actual"></div>
            </div>
        );
    }
}