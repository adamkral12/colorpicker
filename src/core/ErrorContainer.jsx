import React, { Component } from 'react';
import classNames from 'classnames';

export default class RejectedFileContainer extends Component {
    render() {
        var classes = classNames('rejected-file-container', this.props.hidden ? 'hidden' : '');
        return (
        <div className={ classes }>
            <div className="rejected-error-text">
                { this.props.text }
            </div>
        </div>
        )
    }
}