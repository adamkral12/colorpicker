import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';

export default class TableSettingsRow extends OnlyFocusButton {

    render() {
        const styles = this.getStyles();
        const classes =  "row focusable";
        const lightColor = this.shadeRGBColor(0.15);
        return (
            <tr className={ classes }
                onMouseOver={ this.mouseOver }
                onMouseOut={ this.mouseOut }
            >
                <th className="box px437 focus-blue"
                    style={ this.state.hover ? styles.color : {} }
                >
                    <div>{ this.props.textLeft }</div>
                </th>
                <td className="box px263 focus-yellow center"
                    style={ this.state.hover ? { background: lightColor} : {} }
                >
                    <div>{ this.props.textRight }</div>
                </td>
            </tr>
        )
    }
}