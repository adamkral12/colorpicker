import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';

export default class TableSettingsRow extends OnlyFocusButton {

    render() {
        const styles = this.getStyles();
        const classes =  "row focusable";
        const lightColor = this.shadeRGBColor(this.props.colorFocused, 0.15);
        console.log('config get css = ' + JSON.stringify(this.getCSS(lightColor)));
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
                    style={ this.state.hover ? this.getCSS(lightColor).color : {} }
                >
                    <div>{ this.props.textRight }</div>
                </td>
            </tr>
        )
    }
}