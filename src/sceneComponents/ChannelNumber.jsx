import React from 'react';
import Button from '../core/Button';


export default class ChannelNumber extends Button {

    constructor(props) {
        super(props);
        this.state.focusable = this.state.disabable = false;
    }

    render() {
        const styles = this.getStyles();

        return (
            <div className="channel-number"
                 style={ styles.color }
            >
                <div className="text">01</div>
            </div>
        )
    }
}