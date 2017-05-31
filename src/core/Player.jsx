import React, { Component } from 'react';
import classNames from 'classnames';

export default class Player extends Component {

    constructor(props) {
        super(props);
        this.state = { background: 'light-background' };
        this.setChangeBackgroundInterval();
    }

    setChangeBackgroundInterval() {

        setInterval(this.timer.bind(this), 5000);
    }

    timer() {
        if (this.state.background === 'light-background') {
            this.setState({ background: 'dark-background' });
        } else {
            this.setState({ background: 'light-background' });
        }
    }

    render() {
        const width = this.props.width;
        const height = this.props.height;
        const top = this.props.top;
        const left = this.props.left;
        const classes = classNames('dummy-player', this.state.background );
        return (
            <div className={ classes }
                 style={ {width: width,
                          height: height,
                          backgroundSize: width + 'px ' + height + 'px',
                          left: left,
                          top: top
                 } }
            ></div>
        );
    }
}