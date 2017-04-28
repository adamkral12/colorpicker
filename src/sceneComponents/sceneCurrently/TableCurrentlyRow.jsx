import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';

export default class TableCurrentlyRow extends OnlyFocusButton {

        render() {
            const styles = this.getStyles();
            const classes =  "row focusable";

            return (
                <tr className={ classes }
                    onMouseOver={ this.mouseOver }
                    onMouseOut={ this.mouseOut }
                >
                    <td className="box px263 dark focus-blue name"
                        style={ this.state.hover ? styles.color : {} }
                    >
                        <div>{ this.props.name }</div>
                    </td>
                    <td className="box px437 dark focus-blue epg"
                        style={ this.state.hover ? styles.color : {} }
                    >
                        <div>{ this.props.epg }</div>
                    </td>
                </tr>
            )
        }
}