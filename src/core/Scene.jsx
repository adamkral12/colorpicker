import React, { Component } from 'react';

/*
    Abstract class for Scenes
    needs to be filled with elements to render
    root element needs to be <div id="scene-{sceneName} ></div>
 */
export default class Scene extends Component {

    state = {
        active: false
    };

    isSceneActive() {
        return (this.props.activeSceneIndex === this.props.index);
    };


    renderNothing() {
        return null;
    };

    /* Override by concrete scene render
    * START WITH:
      if (!this.isSceneActive()) {
            console.log('rendering nothing');
            return this.renderNothing();
       }
    */
    render () {
        return (<div className={ this.props.className }></div>);
    };
}