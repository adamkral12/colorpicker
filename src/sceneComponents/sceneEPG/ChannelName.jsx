import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';

export default class ChannelName extends OnlyFocusButton {
    render() {
        const styles= this.getStyles();

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