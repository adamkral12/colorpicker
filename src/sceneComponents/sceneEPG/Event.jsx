import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';
import classNames from 'classnames';

export default class Event extends OnlyFocusButton {
    render() {
        const id = 'event_' + this.props.channelId.split('channel_')[1] + '-' + this.props.index;
        const classes = classNames('event focusable playable', this.props.timePosition );
        const styles = this.getStyles();
        return(
            <div id={ id }
                 className={ classes }
                 style={ this.state.hover ? styles.color : {} }
                 onMouseOut={ this.mouseOut }
                 onMouseOver={ this.mouseOver }
            >
                { this.props.text }
            </div>
        )
    }
}

