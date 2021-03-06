import React from 'react';
import Button from '../../core/Button';

export default class TableSettingsRow extends Button {

    render() {
        const focusedStyles = this.getCSS(this.props.colorFocused);
        const normalFont = this.getCSS(this.props.colorNormal).color.color;
        const classes =  "row focusable";
        const lightColor = this.shadeRGBColor(this.props.colorFocused, 0.15);
        //console.log('config get css = ' + JSON.stringify(this.getCSS(lightColor)));
        return (
            <tr className={ classes }
                onMouseOver={ this.mouseOver }
                onMouseOut={ this.mouseOut }
            >
                <th className="box px437 focus-blue"
                    style={ this.state.hover ? focusedStyles.color : { color: normalFont } }
                >
                    <div>{ this.props.textLeft }</div>
                </th>
                <td className="box px263 focus-yellow center"
                    style={ this.state.hover ? this.getCSS(lightColor).color : { color: normalFont } }
                >
                    <div>{ this.props.textRight }</div>
                </td>
            </tr>
        )
    }
}