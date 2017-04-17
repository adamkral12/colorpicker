import React, { Component } from 'react';

export default class RCButtons extends Component {
    render() {
        return(
            <div className="snippet-rc-buttons rc-buttons">
                <table>
                    <tbody>
                    <tr>
                        <td className="start"/>
                        <td className="fill" />
                        <td className="button-red" >
                            <div className="color-button-red"></div>
                            <div className="button"></div>
                            <div className="button-red-text">Menu</div>
                        </td>
                        <td className="button-green">
                            <div className="color-button-green"></div>
                            <div className="button"></div>
                            <div className="button-green-text">Currently</div>
                        </td>
                        <td className="button-yellow">
                            <div className="color-button-yellow"></div>
                            <div className="button"></div>
                            <div className="button-yellow-text">EPG</div>
                        </td>
                        <td className="button-back">
                            <div className="color-button-back"></div>
                            <div className="button"></div>
                            <div className="button-back-text">Quit</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}