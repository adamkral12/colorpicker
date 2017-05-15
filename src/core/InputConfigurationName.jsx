import React, { Component } from 'react';

export default class InputConfigurationName extends Component {
    render() {
        return (
            <div className="config-name">
                <label for="config-name">Configuration name</label>
            <input type="text"
                   id="config-name"
                   onChange={ (event) => this.props.handleNameChange(event.target.value) }
            >
            </input>
            </div>
        )
    }
}