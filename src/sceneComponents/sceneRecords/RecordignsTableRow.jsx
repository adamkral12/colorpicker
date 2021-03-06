import React from 'react';
import Button from '../../core/Button';
import reactCSS from 'reactcss';

export default class RecordignsTableRow extends Button {

    getGreyCSS() {
        return reactCSS({
            'default': {
                grey: {
                    background: `#CDCDCD`,
                    color: `black`
                }
            }
        })
    }

    render() {
        const focusedStyles = this.getCSS(this.props.colorFocused);
        const normalFontStyle = { color: this.getCSS(this.props.colorNormal).color.color };

        return (
            <tr className="row focusable template-normal"
                onMouseOut={ this.mouseOut }
                onMouseOver={ this.mouseOver }
            >
                <th className="name box px350 focus-yellow"
                    style={ this.state.hover ? focusedStyles.color : normalFontStyle }
                >
                    <div className="text">{ this.props.text }</div>
                </th>
                <td className="start box px240 focus-grey center"
                    style={ this.state.hover ? this.getGreyCSS().grey : normalFontStyle }
                >
                    <div className="text"
                         style={ this.state.hover ? { color: "black" } : normalFontStyle }
                    >{ this.props.date }</div>
                </td>
                <td className="kanal box px203 focus-grey center"
                    style={ this.state.hover ? this.getGreyCSS().grey : normalFontStyle }
                >
                    <div className="text"
                         style={ this.state.hover ? { color: "black" } : normalFontStyle }
                    >{ this.props.channelName }</div>
                </td>
            </tr>
        )
    }
}

