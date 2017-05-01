import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';
import classNames from 'classnames';

export default class Event extends OnlyFocusButton {

    shouldComponentUpdate(nextProps, nextState) {

        if (nextProps.focus === 'normal' && (this.props.timePosition === 'now' || this.props.timePosition === "")) {
            return true;
        } else if (nextProps.focus === 'disabled' && this.props.timePosition === 'future') {
            return true;
        } else return (this.state.hover === !nextState.hover);
    }

    render() {
        const id = 'event_' + this.props.channelId.split('channel_')[1] + '-' + this.props.index;
        const classes = classNames('event focusable playable', this.props.timePosition );
        const lighterColor = this.shadeRGBColor(this.props.colorNormal, 0.4);
        const styles = this.getStyles();

        //console.log('props color = ' + JSON.stringify(this.props.colorNormal));
        return(
            <div id={ id }
                 className={ classes }
                 style={ this.state.hover ?
                     styles.color : this.props.timePosition === 'future' ?
                         this.getCSS(this.props.colorDisabled).color : this.props.timePosition === 'now' ?
                              this.getCSS(lighterColor).color : this.getCSS(this.props.colorNormal).color
                 }
                 onMouseOut={ this.mouseOut }
                 onMouseOver={ this.mouseOver }
            >
                { this.props.text }
            </div>
        )
    }
}

