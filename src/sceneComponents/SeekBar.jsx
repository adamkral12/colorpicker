import React, { Component } from 'react';

export default class SeekBar extends Component {
    render() {
        return (
            <div className="bar">
                <div className="progress clickable" data-value="progress"></div>
                <div className="actual"></div>
            </div>
        );
    }
}