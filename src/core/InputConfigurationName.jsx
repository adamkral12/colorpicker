import React, { Component } from 'react';

export default class InputConfigurationName extends Component {
    constructor(props) {
        super(props);
        console.log('props ' + props.initialName);
    }

    render() {
        if (this.props.mode === 'view') return null;

        return (
            <div className="config-name">
                <label htmlFor="config-name">Configuration name</label>
            <input type="text"
                   id="config-name"
                   onChange={ (event) => this.props.handleNameChange(event.target.value) }
                   value={this.props.initialName}
            >
            </input>
            </div>
        )
    }
}