import React, { Component } from 'react';
import classNames from 'classnames';

export default class Loader extends Component {
    render() {
        const classes = this.props.show ? classNames('spinner spinner-start') : classNames('spinner spinner-start spinner-stop');

        return (
            <div id="loading"
                 style={this.props.show ? {display:'block'} : {display:'none'}}
            >
                <div className="in">
                    <div className={classes}>
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <div className="rect3"></div>
                        <div className="rect4"></div>
                        <div className="rect5"></div>
                    </div>
                    <div className="background"></div>
                </div>
            </div>
        )
    }
}