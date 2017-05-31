import React from 'react';
import Button from '../../core/Button';

export default class PairingBackground extends Button {

    constructor(props) {
        super(props);
        this.state.focusable = this.state.disabable = false;
    }

    render () {
        const styles = this.getStyles();

        return (
            <div className="pairing-background"
                 style={ styles.color }
            >

            </div>
        )
    }
}