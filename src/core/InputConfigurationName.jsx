import React, { Component } from 'react';

export default class InputConfigurationName extends Component {
    constructor(props) {
        super(props);
        console.log('props ' + props.initialName);
    }

    render() {
        return (
            <div className="config-name">
                <label for="config-name">Configuration name</label>
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