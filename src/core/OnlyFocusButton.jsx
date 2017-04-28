import React from 'react';
import Button from './Button';

export default  class OnlyFocusButton extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = this.state.normal = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.hover === !nextState.hover;
    }

    /* Override this */
    render() {
        return (<div></div>);
    }
}