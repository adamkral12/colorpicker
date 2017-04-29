import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';
import reactCSS from 'reactcss';

export default class RecordignsTableRow extends OnlyFocusButton {

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
        const styles = this.getStyles();

        return (
            <tr className="row focusable template-normal"
                onMouseOut={ this.mouseOut }
                onMouseOver={ this.mouseOver }
            >
                <th className="name box px350 focus-yellow"
                    style={ this.state.hover ? styles.color : {} }
                >
                    <div className="text">{ this.props.text }</div>
                </th>
                <td className="start box px240 focus-grey center"
                    style={ this.state.hover ? this.getGreyCSS().grey : {} }
                >
                    <div className="text"
                         style={ this.state.hover ? { color: "black" } : {} }
                    >{ this.props.date }</div>
                </td>
                <td className="kanal box px203 focus-grey center"
                    style={ this.state.hover ? this.getGreyCSS().grey : {} }
                >
                    <div className="text"
                         style={ this.state.hover ? { color: "black" } : {} }
                    >{ this.props.channelName }</div>
                </td>
            </tr>
        )
    }
}

