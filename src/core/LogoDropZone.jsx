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
                'backgroundSize': '200px',
                'backgroundRepeat': 'no-repeat',
                'backgroundPosition': 'bottom right ',
                height: '72px',
                width: '200px'
            }
        }
    }

    onDropAccepted(acceptedFiles) {
        console.log('ondrop accepted files ' + JSON.stringify(acceptedFiles));
        this.setState({ logoWasUploaded: true });
        const backgroundWithUrl = update(this.state.logoUploaded, {
            'backgroundImage': { $set: 'url(' + acceptedFiles[0].preview + ')' }
        });

        console.log('on drop ' + JSON.stringify(backgroundWithUrl));
        this.setState({ logoUploaded: backgroundWithUrl });
        this.props.handleDropAccepted(backgroundWithUrl);
    }

    onDropRejected(rejectedFiles) {

        rejectedFiles.forEach(file => {
            console.log('file name' + file.name);
            this.props.handleDropRejected(file.name);
        });
    }

    renderDragText() {
        return this.state.logoWasUploaded ? "" : "Drag files here or click to upload logo";
    }

    render() {

        console.log('on drop ' + JSON.stringify(this.state.logoUploaded));
        return (
            <div className="dropzone" >
                <DropZone onDropAccepted={ this.onDropAccepted }
                          onDropRejected={ this.onDropRejected }
                          accept="image/jpeg, image/png"
                          style={ this.state.logoWasUploaded ? this.state.logoUploaded : this.state.logoNotUploaded }
                >
                    { this.renderDragText() }
                </DropZone>
            </div>
        )
    }
}