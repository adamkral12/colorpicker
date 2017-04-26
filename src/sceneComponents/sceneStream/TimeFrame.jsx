import React from 'react';
import Button from '../../core/Button';

export default class TimeFrame extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = false;
    }

    render() {
        const styles = this.getStyles();
        console.log('TimeFrame font = ' + JSON.stringify(styles.color));
        return (
            <div id="timeframe" className="focusable">
                <div className="icon-timeframe">
                    <span className="time"
                          style={ styles.color }
                    >23:10</span>
                    <span className="path1"/>
                    <span className="path2"
                          style={ styles.timeFrame }
                    />
                </div>
            </div>
        );
    }
}