import React, { Component } from 'react';
import $ from 'jquery';

export default class SaveConfigurationButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /* selects and procces props to send it to api */
    formatProps() {
        console.log(' props color normal = ' + JSON.stringify(this.props.colorNormal));
        const colorNormal = this.props.colorNormal.rgb.r + ', ' + this.props.colorNormal.rgb.g + ', ' + this.props.colorNormal.rgb.b + ', ' + this.props.colorNormal.rgb.a;
        const fontNormal = this.props.colorNormal.font.r + ', ' + this.props.colorNormal.font.g + ', ' + this.props.colorNormal.font.b;
        const colorFocused = this.props.colorFocused.rgb.r + ', ' + this.props.colorFocused.rgb.g + ', ' + this.props.colorFocused.rgb.b + ', ' + this.props.colorFocused.rgb.a;
        const fontFocused = this.props.colorFocused.font.r + ', ' + this.props.colorFocused.font.g + ', ' + this.props.colorFocused.font.b;
        const colorDisabled = this.props.colorDisabled.rgb.r + ', ' + this.props.colorDisabled.rgb.g + ', ' + this.props.colorDisabled.rgb.b + ', ' + this.props.colorDisabled.rgb.a;
        const fontDisabled = this.props.colorDisabled.font.r + ', ' + this.props.colorDisabled.font.g + ', ' + this.props.colorDisabled.font.b;
        const fileBase64 = this.props.fileBase64;
        const colorNormalLighter = this.props.colorNormalLighter.rgb.r + ', ' + this.props.colorNormalLighter.rgb.g + ', ' + this.props.colorNormalLighter.rgb.b;
        const colorNormalDarker = this.props.colorNormalDarker.rgb.r + ', ' + this.props.colorNormalDarker.rgb.g + ', ' + this.props.colorNormalDarker.rgb.b;
        const colorFocusedLighter = this.props.colorFocusedLighter.rgb.r + ', ' + this.props.colorFocusedLighter.rgb.g + ', ' + this.props.colorFocusedLighter.rgb.b;
        const cid = this.props.cid ? this.props.cid : null;

        console.log('filebase64 = ' + fileBase64);
        return {
            'colorNormal': colorNormal,
            'fontNormal' : fontNormal,
            'colorFocused': colorFocused,
            'fontFocused': fontFocused,
            'colorDisabled': colorDisabled,
            'fontDisabled': fontDisabled,
            'fileBase64': fileBase64,
            'colorNormalLighter': colorNormalLighter,
            'colorNormalDarker': colorNormalDarker,
            'colorFocusedLighter': colorFocusedLighter,
            'cid': cid
        }
    }

    handleClick() {
        $.post('http://bakalarka.local/api/set-configuration', this.formatProps())
            .then(function(response) {
                console.log(response);
                if (response.status === 1) {
                    //success
                    console.log(window.location.protocol + "//" + window.location.host + '/admin/configurations/');
                    window.location.href = window.location.protocol + "//" + window.location.host + '/admin/configurations/?success=true';
                } else {
                    //failure
                    console.log('response failure ' + JSON.stringify(response));
                }

                this.props.handleResponseReceived(response);

            }.bind(this))
            .catch(function(error) {
                console.log('Could not get configuration ' + JSON.stringify(error));
                //TODO: handle error
                this.props.handleResponseReceived(error);
            }.bind(this));
    }

    render() {
        return (
            <button
                className="btn btn-lg btn-primary"
                onClick={ this.handleClick }
            >
                Save
            </button>
        )
    }
}