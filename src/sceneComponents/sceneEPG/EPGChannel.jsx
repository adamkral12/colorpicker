import React, { Component } from 'react';
import ChannelName from './ChannelName';
import Event from './Event';


export default class EPGChannel extends Component {

    constructor(props) {
        super(props);
        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.state = { hover: false };
    };

    mouseOver() {
        this.setState( { hover: true });
    }

    mouseOut() {
        this.setState( { hover: false} );
    }

    renderEvent(index) {
        let timePosition = "";
        if (index === this.props.eventNow) {
            timePosition = "now";
        } else if ( index > this.props.eventNow) {
            timePosition = "future"
        }

        return (
            <Event
                channelId={ this.props.id }
                index={index}
                key={index}
                text={ this.props.events[index] }
                timePosition={ timePosition }
                color={ this.props.color }
                colorFocused={ this.props.colorFocused }
                colorDisabled={ this.props.colorDisabled }
                colorNormal={ this.props.colorNormal }
                focus={ this.props.focus }
            />
        );
    }

    renderEvents() {
        let events = [];

        for( let i = 0; i < this.props.numberOfEvents; i++) {
            events.push(this.renderEvent(i));
        }

        return events;
    }

    render() {
        console.log('render epg channel hover = ' + this.state.hover);
        return (
            <div className="channel"
                 id={ this.props.id }
                 onMouseOver={ this.mouseOver }
                 onMouseOut={ this.mouseOut }
            >
                <ChannelName
                    index={ this.props.index }
                    channelName={ this.props.channelName }
                    color={ this.props.color }
                    colorFocused={ this.props.colorFocused }
                    focus={ this.props.focus }
                    hover={ this.state.hover }
                />

                { this.renderEvents() }
        </div>
        )
    }
}
