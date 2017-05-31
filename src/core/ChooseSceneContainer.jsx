import React, { Component } from 'react';
import ChooseSceneButton from './ChooseSceneButton';

/*
    Component to maintain ChooseSceneButton components
    always one is selected - changes onclick
    if you want to add more buttons, modify this.childrenIdx in componentWillMount
    on first render is selected first child
 */
export default class ChooseSceneContainer extends Component {


    constructor(props) {
        super(props);

        this.childrenIdx = {
            id: [0, 1, 2, 3, 4, 5, 6],
            text: ['Stream', 'Pairing', 'Configuration', 'Currently', 'Recordings', 'EPG', 'Menu']
        };

    };

    state = {
        selected: 0
    };

    render () {
        return (
            <div id="choose-scene-container">
                {
                    this.childrenIdx.id.map(function(value, i) {
                        return (
                            <ChooseSceneButton selected={this.props.activeSceneIndex === i}
                                               handleClick={ this.props.onSceneChange }
                                               index={i}
                                               key={i}
                                               text={this.childrenIdx.text[i]}
                            />
                        );
                    }, this)
                }
            </div>
        )
    }
}