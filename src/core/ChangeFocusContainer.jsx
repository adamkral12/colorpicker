import React, { Component } from 'react';
import ChangeFocusButton from './ChangeFocusButton';

/* Changes focus and state to
        focused: false || tue || 'disabled'
 */
export default class ChangeFocusContainer extends Component {

    constructor(props) {
        super(props);
        this.handleFocus = this.handleFocus.bind(this);
    };


    handleFocus(focus) {
        console.log('change focus click ' + focus);
        this.props.handleFocus(focus);
    };

    render() {
        return (
            <div className="change-focus-container">
                <ChangeFocusButton text="focused"
                                   handleFocus={this.handleFocus}
                                   focus={ this.props.focus }
                />
                <ChangeFocusButton text="normal"
                                   handleFocus={this.handleFocus}
                                   focus={ this.props.focus }
                />
                <ChangeFocusButton text="disabled"
                                   handleFocus={this.handleFocus}
                                   focus={ this.props.focus }
                />
            </div>
        );
    }
}