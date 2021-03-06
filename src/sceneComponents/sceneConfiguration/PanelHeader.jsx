import React from 'react';
import Button from '../../core/Button';

export default class PanelHeader extends Button {
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
                <div className="title">{ this.props.text }</div>
                <div className="time">07:45</div>
            </div>
        )
    }
}
