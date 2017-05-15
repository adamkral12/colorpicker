import React, { Component } from 'react';
import classNames from 'classnames';

export default class FancyBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('reder fancy box = ' + JSON.stringify(this.props.message));
        if (!this.props.message) {
            return null;
        }

        const status = this.props.message.status === 0 ? 'failure' : 'success';
        const classes = classNames('ajax-response',  status );

        return (
            <div className={ classes }
                 style={ {display: 'block'} }

            >
                {this.props.message.msg}
            </div>
        )
    }
}
