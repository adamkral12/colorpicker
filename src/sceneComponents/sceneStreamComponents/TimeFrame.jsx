import React from 'react';
import Button from '../../core/Button';

export default class TimeFrame extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = false;
    }

    render() {
        var styles = this.getStyles();
        console.log('TimeFrame font = ' + JSON.stringify(this.props.font));
        return (
            <div id="timeframe" className="focusable">
                <div className="icon-timeframe">
                    <span className="time">23:10</span>
                    <span className="path1"/>
                    <span className="path2"
                          style={ styles.timeFrame }
                    />
                </div>
            </div>
        );
    }
}