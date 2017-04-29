import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';

export default class RecordignsTableRow extends OnlyFocusButton {
    render() {
        const styles = this.getStyles();

        return (
            <tr className="row focusable"
                onMouseOver={ this.mouseOver }
                onMouseOut={ this.mouseOut }
            >
                <td className="box px263 dark focus-blue name"
                    style={ this.state.hover ? styles.color : {} }
                >
                    <div className="chName">{ this.props.channelName }</div>
                </td>
                <td className="box px437 dark focus-blue epg"
                    style={ this.state.hover ? styles.color : {} }
                >
                    <div></div>
                </td>
            </tr>
        )
    }
}

