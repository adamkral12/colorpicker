import React from 'react';
import Button from '../../core/Button';

export default class Panelheader extends Button {
    constructor(props) {
        super(props);
        this.state.disabable = this.state.focusable = false;
    }

    render() {
        const styles = this.getStyles();

        return(
            <div className="snippet-panel-header"
                 style={ styles.color }
            >
                <div className="day">Wednesday 26. 4.</div>
                <div className="title">SETTINGS</div>
                <div className="time">07:45</div>
            </div>
        )
    }
}
