import React from 'react';
import Button from '../../core/Button';


export default class ChannelNumber extends Button {

    constructor(props) {
        super(props);
        this.state.focusable = this.state.disabable = false;
    }

    render() {
        const styles = this.getStyles();
        console.log('Channel number font = ' + JSON.stringify(this.props.font));

        return (
            <div className="channel-number"
                 style={ styles.color }
                 onMouseOver={ this.mouseOver }
                 onMouseOut={ this.mouseOut }
            >
                <div className="text"
                     style={ {color: styles.color.color} }
                >01</div>
            </div>
        )
    }
}