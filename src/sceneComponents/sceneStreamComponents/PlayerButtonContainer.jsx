import React, { Component } from 'react';
import Button from '../../core/Button';

export default class PlayerButtonContainer extends Component {

    render () {
        return (
            <ul className="buttons">
                <Button className="button-play"
                        data-value="play"
                        text="Play"
                        iconClassName="icon-play3"
                        color={ this.props.color }
                        focus={ this.props.focus }
                />
                <Button className="button-back"
                        data-value="back"
                        text="Startover"
                        iconClassName="icon-previous2"
                        color={ this.props.color }
                        focus={ this.props.focus }
                />
                <Button className="button-record"
                        data-value="record"
                        text="Record"
                        iconClassName="record"
                        color={ this.props.color }
                        focus={ this.props.focus }
                />
                <Button className="button-live"
                        data-value="live"
                        text="Live"
                        iconClassName="icon-play3"
                        color={ this.props.color }
                        focus={ this.props.focus }
                />
                <Button className="button-previous"
                        data-value="prev"
                        text="Previous"
                        iconClassName="icon-backward2"
                        color={ this.props.color }
                        focus={ this.props.focus }
                />
                <Button className="button-next"
                        data-value="next"
                        text="Next"
                        iconClassName="icon-forward3"
                        color={ this.props.color }
                        focus={ this.props.focus }
                />
            </ul>
        );
    }
}