import React, { Component } from 'react';
import ChangeFocusButton from './ChangeFocusButton';
import ChangeFontButton from './ChangeFontButton';

/* Changes focus and state to
        focused: false || tue || 'disabled'
 */
export default class ChangeFocusContainer extends Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleFontSelection = this.handleFontSelection.bind(this);
    };


    handleFocus(focus) {
        this.props.handleFocus(focus);
    };

    handleFontSelection(selected) {
        //console.log('Change focus container handlefontchange, selected = ' + selected);
        this.props.handleFontSelection(selected);
    }

    render() {
        return (
            <div className="change-focus-container">
                <ChangeFocusButton text="focused"
                                   handleFocus={ this.handleFocus }
                                   focus={ this.props.focus }
                />
                <ChangeFocusButton text="normal"
                                   handleFocus={ this.handleFocus }
                                   focus={ this.props.focus }
                />
                <ChangeFocusButton text="disabled"
                                   handleFocus={ this.handleFocus }
                                   focus={ this.props.focus }
                />
                <ChangeFontButton handleFontSelection={ this.handleFontSelection }
                />
            </div>
        );
    }
}