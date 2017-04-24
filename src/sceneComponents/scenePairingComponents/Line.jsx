import React, { Component } from 'react';
import Key from './Key';

export default class Line extends Component {
    render() {

        return (
            <div className="line">
                <Key
                    text={ this.props.text[0] }
                    color={ this.props.color }
                    focus={ this.props.focus }
                />
                <Key
                    text={ this.props.text[1] }
                    icon={ this.props.icon }
                    color={ this.props.color }
                    focus={ this.props.focus }
                />
                <Key
                    text={ this.props.text[2] }
                    color={ this.props.color }
                    focus={ this.props.focus }
                />
            </div>
            );
    }
}