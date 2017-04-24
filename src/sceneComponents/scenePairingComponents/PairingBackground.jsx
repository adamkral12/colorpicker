import React from 'react';
import Button from '../../core/Button';
import Line from '../scenePairingComponents/Line';

export default class PairingBackground extends Button {

    constructor(props) {
        super(props);
        this.state.focusable = this.state.disabable = false;
    }

    render () {
        const styles = this.getStyles();
        const keyNumbers = [1,2,3];
        const keyNumbers2 = [4,5,6];
        const keyNumbers3 = [7,8,9];
        const keyNumbers4 = [0,"", "OK"];
        const icon = "BSP";

        return (
            <div className="pairing-background"
                 style={ styles.color }
            >

            </div>
        )
    }
}