import React, { Component } from 'react';
import axios from 'axios';

export default class SaveConfigurationButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /* selects and procces props to send it to api */
    convertProps() {

    }

    handleClick() {
        axios.get('http://bakalarka.local/api/save-configuration')
            .then(function(response) {
                console.log('response configuration = ' + response);
            })
            .catch(function(error) {
                console.log('Could not get configuration ' + error);
                //TODO: handle error
            });
    }

    render() {
        return (
            <button
                onClick={ this.handleClick }
            >
                Save
            </button>
        )
    }
}