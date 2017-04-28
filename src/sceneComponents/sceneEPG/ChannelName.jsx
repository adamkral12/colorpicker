import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';

export default class ChannelName extends OnlyFocusButton {
    render() {
        const styles= this.getStyles();
        console.log('Channel name props hove r = ' + this.props.hover + ', color = ' + JSON.stringify(styles.color));
        return (
            <div className="channelBox"
            >
                <div className="channelIndex">
                    { this.props.index }
                </div>

                <div className="channelName"
                     style={ this.state.hover || this.props.hover ? styles.color : {} }
                >
                    { this.props.channelName }
                </div>
            </div>
        )
    }
}