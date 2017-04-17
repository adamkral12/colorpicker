import React, { Component } from 'react';

/*
    Abstract class for Scenes
    needs to be filled with elements to render
    root element needs to be <div id="scene-{sceneName} ></div>
 */
export default class Scene extends Component {
    
    componentWillMount() {
        this.setState({className: ' scene'});
    };

    render () {
        return (<div className={ this.props.className }></div>);
    };
}