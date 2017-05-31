import React, { Component } from 'react';
import classNames from 'classnames';

export default class ChooseSceneButton extends Component {
    
    render() {
        let classes = classNames('choose-button', {selected: this.props.selected ? 'selected' : ''});
        return (
            <div className={classes}
                 onClick={() => this.props.handleClick(this.props.index)}
            >
                 {this.props.text}
            </div>
        );
    }
}