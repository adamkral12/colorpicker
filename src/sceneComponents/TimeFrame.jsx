import React from 'react';
import Button from '../core/Button';

export default class TimeFrame extends Button {

    render() {
        var styles = this.getStyles();
        console.log('Timeframe color = ' + JSON.stringify(styles.timeFrame));
        return (
            <div id="timeframe" className="focusable">
                <div className="icon-timeframe">
                    <span className="time">23:10</span>
                    <span className="path1"></span>
                    <span className="path2"
                          style={ styles.timeFrame }
                    ></span>
                </div>
            </div>
        );
    }
}