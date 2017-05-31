import React, { Component } from 'react';
import Key from './Key';

export default class Line extends Component {
    render() {

        return (
            <div className="line">
                <Key
                    text={ this.props.text[0] }
                    colorFocused={ this.props.colorFocused }
                    colorNormal={ this.props.colorNormal }
                    focus={ this.props.focus }
                />
                <Key
                    text={ this.props.text[1] }
                    icon={ this.props.icon }
                    colorFocused={ this.props.colorFocused }
                    colorNormal={ this.props.colorNormal }
                    focus={ this.props.focus }
                />
                <Key
                    text={ this.props.text[2] }
                    colorFocused={ this.props.colorFocused }
                    colorNormal={ this.props.colorNormal }
                    focus={ this.props.focus }
                />
            </div>
            );
    }
}