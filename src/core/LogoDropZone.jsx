import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import update from 'react-addons-update';

export default class LogoDropZone extends Component {
    constructor(props) {
        super(props);
        this.state = { files: [] };
        this.onDropAccepted = this.onDropAccepted.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
        this.state = {
            logoWasUploaded: false,
            logoNotUploaded: {
                width: '200px',
                height: '72px',
                borderWidth: '2px',
                borderColor: 'rgb(102, 102, 102)',
                borderStyle: 'dashed',
                borderRadius: '5px',
                backgroundColor: 'rgba(210, 180, 161, 0.2)',
                fontSize: '20px',
                color: 'white',
                backgroundPosition: '0 0'
            },
            logoUploaded: {
                backgroundSize: '200px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right ',
                height: '72px',
                width: '200px'
            }
        }
    }

    onDropAccepted(acceptedFiles) {
        //console.log('ondrop accepted files ' + JSON.stringify(acceptedFiles));
        this.setState({ logoWasUploaded: true });
        const backgroundWithUrl = update(this.state.logoUploaded, {
            'backgroundImage': { $set: 'url(' + acceptedFiles[0].preview + ')' }
        });

        let img = new Image();
        let _URL = window.URL || window.webkitURL;
        const scope = this;

        img.onload = function () {
           if (this.height > 35 || this.width > 185) {
               scope.props.handleDropRejected('File is too large, please upload image with maximal width 185px and height 35px');
           } else {
               scope.setState({ logoUploaded: backgroundWithUrl });
               scope.props.handleDropAccepted(this.state.logoUploaded);

               const reader = new FileReader();
               reader.onload = (event) => {
                   console.log(acceptedFiles[0]);
                   this.props.handleDropAccepted(reader.result);
               };
               reader.readAsDataURL(acceptedFiles[0]);
           }
        };

        img.src = _URL.createObjectURL(acceptedFiles[0]);

    }

    onDropRejected(rejectedFiles) {

        rejectedFiles.forEach(file => {
            //console.log('file name' + file.name);
            this.props.handleDropRejected("Uploaded file `" + file.name + '` is not allowed, please upload .png, .svg or .jpg file');
        });
    }

    renderDragText() {
        return this.state.logoWasUploaded ? "" : "Drag files here or click to upload logo";
    }

    render() {

        //console.log('on drop ' + JSON.stringify(this.state.logoUploaded));
        return (
            <div className="dropzone" >
                <DropZone onDropAccepted={ this.onDropAccepted }
                          onDropRejected={ this.onDropRejected }
                          accept="image/jpeg, image/png, image/svg+xml"
                          style={ this.state.logoWasUploaded ? this.state.logoUploaded : this.state.logoNotUploaded }
                >
                    { this.renderDragText() }
                </DropZone>
            </div>
        )
    }
}