import React, { Component } from 'react';
import ChooseSceneButton from './ChooseSceneButton';

/*
    Component to maintain ChooseSceneButton components
    always one is selected - changes onclick
    if you want to add more buttons, modify this.childrenIdx in componentWillMount
    on first render is selected first child
 */
export default class ChooseSceneContainer extends Component {


    componentWillMount() {
        // selected[index] == true if item with given index is currently selected
        this.setState({selected: 0});
        this.childrenIdx = {
            id: [0,1],
            text: ['Stream', 'Pairing']
        };

    };


    onItemClick(id) {
        this.setState({selected: id});
    };


    render () {
        return (
            <div id="choose-scene-container">
                {
                    this.childrenIdx.id.map(function(value, i) {
                        return (
                            <ChooseSceneButton selected={this.state.selected === i}
                                               onClick={this.onItemClick.bind(this)}
                                               index={i}
                                               text={this.childrenIdx.text[i]}
                            />
                        );
                    }, this)
                }
            </div>
        )
    }
}