import React, { Component } from 'react';
import DropZone from 'react-dropzone';
import update from 'react-addons-update';

export default class LogoDropZone extends Component {
    constructor(props) {
        super(props);
        this.state = { files: [] };
        this.onDropAccepted = this.onDropAccepted.bind(this);
        this.onDropRejected = this.onDropRejected.bind(this);
        console.log('initial image = '  + props.initialImage);
        const logoUploaded = props.initialImage ? true : false;
        this.state = {
            logoWasUploaded: logoUploaded,
            logoNotUploaded: {
                width: '200px',
                height: '72px',
                borderWidth: '2px',
                borderColor: 'rgb(102, 102, 102)',
                borderStyle: 'dashed',
                borderRadius: '5px',
                backgroundColor: 'rgba(210, 180, 161, 0.2)',
                fontSize: '19px',
                color: 'white',
                backgroundPosition: '0 0'
            },
            logoUploaded: {
                backgroundSize: '175px 35px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right ',
                backgroundImage: "",
                height: '72px',
                width: '200px'
            }
        }

        this.setInitialImage(props.initialImage, props.imageFormat);

    }

    setInitialImage(fileBase64, format) {
        this.state.logoUploaded.backgroundImage = 'url("data:image/' + format + ';base64,' + fileBase64 + '")';
    }

    onDropAccepted(acceptedFiles) {
        const backgroundWithUrl = update(this.state.logoUploaded, {
            'backgroundImage': { $set: 'url(' + acceptedFiles[0].preview + ')' }
        });

        let img = new Image();
        let _URL = window.URL || window.webkitURL;
        const scope = this;

        img.onload = function () {
      //     if (this.height > 100 || this.width > 500) {
          //     scope.props.handleDropRejected('Dimensions are too large, please upload image with maximal width 500px and height 100px, ideal ratio is 5:1');
        //   } else {
               scope.setState({ logoUploaded: backgroundWithUrl });
                console.log('set state to ' + JSON.stringify(backgroundWithUrl));
               const reader = new FileReader();
               reader.onload = (event) => {
                   console.log(acceptedFiles[0]);
                   console.log('accepted');
                   scope.setState({ logoWasUploaded: true });
                   scope.props.handleDropAccepted(reader.result);
               };
               reader.readAsDataURL(acceptedFiles[0]);
          // }
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
    //    console.log('state logo was upload = ' + this.state.logoWasUploaded);
        return this.state.logoWasUploaded ? "" : "Drag files here or click to upload logo (5:1)";
    }

    render() {

        //console.log('on drop ' + JSON.stringify(this.state.logoUploaded));
        let dropZone = null;
        if (this.props.mode === "view") {
            dropZone = <div
                style={ this.state.logoWasUploaded ? this.state.logoUploaded : this.state.logoNotUploaded }
                        ></div>
        } else {
            dropZone = <DropZone onDropAccepted={ this.onDropAccepted }
                      onDropRejected={ this.onDropRejected }
                      accept="image/jpeg, image/png, image/svg+xml"
                      style={ this.state.logoWasUploaded ? this.state.logoUploaded : this.state.logoNotUploaded }
            >
                { this.renderDragText() }
            </DropZone>;
        }
        return (
            <div className="dropzone" id="img-dropzone">
                {dropZone}
            </div>
        )
    }
}