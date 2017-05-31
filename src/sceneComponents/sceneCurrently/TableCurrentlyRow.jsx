import React from 'react';
import Button from '../../core/Button';

export default class TableCurrentlyRow extends Button {

        render() {
            const styles = this.getCSS(this.props.colorFocused);
            const classes =  "row focusable";
            const normalFontStyle = { color: this.getCSS(this.props.colorNormal).color.color };
            return (
                <tr className={ classes }
                    onMouseOver={ this.mouseOver }
                    onMouseOut={ this.mouseOut }
                >
                    <td className="box px263 dark focus-blue name"
                        style={ this.state.hover ? styles.color : normalFontStyle }
                    >
                        <div>{ this.props.name }</div>
                    </td>
                    <td className="box px437 dark focus-blue epg"
                        style={ this.state.hover ? styles.color : normalFontStyle }
                    >
                        <div>{ this.props.epg }</div>
                    </td>
                </tr>
            )
        }
}