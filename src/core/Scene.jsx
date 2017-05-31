import React, { Component } from 'react';
import reactCSS from 'reactcss';

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


    getFontCSS(color) {
        return reactCSS({
                'default': {
                    font: {
                        color: `rgb(${ color.font.r },
                              ${ color.font.g },
                              ${ color.font.b })`
                    }
                }
            }
        );
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