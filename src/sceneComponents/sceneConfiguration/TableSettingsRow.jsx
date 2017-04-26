import React from 'react';
import Button from '../../core/Button';

export default class TableSettingsRow extends Button {

    constructor(props) {
        super(props);
        this.state.normal = this.state.disabable = false;
    }

    render() {
        const styles = this.getStyles();
        const classes =  "row focusable";

        return (
            <tr className={ classes }
            >
                <th className="box px437 focus-blue"
                    style={ styles.color }
                >
                    <div>{ this.props.textLeft }</div>
                </th>
                <td className="box px263 focus-yellow center">
                    <div>{ this.props.textRight }</div>
                </td>
            </tr>
        )
    }
}