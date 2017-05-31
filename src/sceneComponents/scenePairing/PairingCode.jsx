import React from 'react';
import Button from '../../core/Button';

export default class PairingCode extends Button {
    constructor(props) {
        super(props);
        this.state.focusable = this.state.disabable = false;
    }

    render() {
        //console.log('pairing code render');
        const darkerColor = this.getCSS(this.shadeRGBColor(this.props.colorNormal, -0.5));
        return (
            <div
                style={ darkerColor.color }
            ></div>
        )
    }
}