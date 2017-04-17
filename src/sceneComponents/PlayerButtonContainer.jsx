import React, { Component } from 'react';
import Button from '../core/Button';

export default class PlayerButtonContainer extends Component {

    constructor(props) {
        super(props);
        this.handleStylesChange = this.handleStylesChange.bind(this);
    };


    handleStylesChange = (color) => {
        this.props.onStylesChange(color);
    };

    render () {
        console.log('Player button containerr color = ' + JSON.stringify(this.props.color));
        return (
            <ul className="buttons">
                <Button className="button-play"
                        data-value="play"
                        text="Play"
                        iconClassName="icon-play3"
                        onChangeComplete={ this.handleStylesChange }
                        color={ this.props.color }

                />
                <Button className="button-back"
                        data-value="back"
                        text="Startover"
                        iconClassName="icon-previous2"
                        onChangeComplete={ this.handleStylesChange }
                        color={ this.props.color }
                />
                <Button className="button-record"
                        data-value="record"
                        text="Record"
                        iconClassName="record"
                        onChangeComplete={ this.handleStylesChange }
                        color={ this.props.color }
                />
                <Button className="button-live"
                        data-value="live"
                        text="Live"
                        iconClassName="icon-play3"
                        onChangeComplete={ this.handleStylesChange }
                        color={ this.props.color }
                />
                <Button className="button-previous"
                        data-value="prev"
                        text="Previous"
                        iconClassName="icon-backward2"
                        onChangeComplete={ this.handleStylesChange }
                        color={ this.props.color }
                />
                <Button className="button-next"
                        data-value="next"
                        text="Next"
                        iconClassName="icon-forward3"
                        onChangeComplete={ this.handleStylesChange }
                        color={ this.props.color }
                />
            </ul>
        );
    }
}
