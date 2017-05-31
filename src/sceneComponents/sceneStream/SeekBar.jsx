import React from 'react';
import Button from '../../core/Button';

export default class SeekBar extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = false;
    };

    render() {
        var styles = this.getStyles();
        //console.log('Seekbar font = ' + JSON.stringify(this.props.font));

        return (
            <div className="bar">
                <div className="progress clickable"
                     onMouseOver={ this.mouseOver }
                     onMouseOut={ this.mouseOut }
                     style={ styles.noOpacity }
                ></div>
                <div className="actual"></div>
            </div>
        );
    }
}