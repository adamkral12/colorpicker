import React, { Component } from 'react';
import inArray from 'in-array';

import SceneStream from "../scenes/SceneStream";
import ScenePairing from "../scenes/ScenePairing";
import SceneConfiguration from "../scenes/SceneConfiguration";
import SceneCurrently from "../scenes/SceneCurrently";
import SceneRecordings from "../scenes/SceneRecordings";
import SceneEPG from "../scenes/SceneEPG";
import SceneMenu from "../scenes/SceneMenu";
import RCButtons from "../sceneComponents/sceneStream/RCButtons";
import Player from '../core/Player';
import ErrorContainer from '../core/ErrorContainer';


export default class ViewPort extends Component {

    constructor(props) {
        super(props);
        this.handleDropAccepted = this.handleDropAccepted.bind(this);
        this.handleDropRejected = this.handleDropRejected.bind(this);
    }

    componentWillMount() {
        this.setState({ errorHidden: true });
    }

    handleDropAccepted(fileBase64) {
        this.setState( { errorMsg: "" });
        this.setState( { errorHidden: true });
        this.props.onLogoUpdate(fileBase64);
    }

    handleDropRejected(errorMsg) {
        this.setState( { errorMsg: errorMsg });
        this.setState({ errorHidden: false });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ajaxResponse && nextProps.ajaxResponse.status === 0) {
            console.log('setting state of error mesg');
            this.setState( { errorMsg: nextProps.ajaxResponse.msg });
            this.setState( { errorHidden: false });
        } else {
            this.setState( { errorHidden: true });
        }
    }


    render() {
        let width = 0;
        let height = 0;
        let left = 0;
        let top = 0;

        if (inArray([0, 3, 6], this.props.activeSceneIndex )) {
            width = 1280;
            height = 720;
        } else if (inArray([2, 4, 5], this.props.activeSceneIndex )) {
            width = 311;
            height = 175;
            left = 904;
            top = 79;
        } else {
            //dimensions 0 for pairing
        }

        return (
            <div id="viewport">
                <Player
                    width={ width }
                    height={ height }
                    left={ left }
                    top={ top }
                />

                <ErrorContainer
                    hidden={ this.state.errorHidden }
                    text={ this.state.errorMsg }
                />

                <SceneStream id="scene-stream"
                             onChangeComplete={ this.handleStylesChange }
                             activeSceneIndex={ this.props.activeSceneIndex }
                             colorNormal={ this.props.colorNormal }
                             colorFocused={ this.props.colorFocused }
                             colorDisabled={ this.props.colorDisabled }
                             handleDropAccepted={ this.handleDropAccepted }
                             handleDropRejected={ this.handleDropRejected }
                             focus={ this.props.focus }
                             onLogoUpdate={ this.props.onLogoUpdate }
                             initialImage={ this.props.initialImage }
                             imageFormat={ this.props.imageFormat }
                             ajaxResponse={ this.props.ajaxResponse }
                             index={0}
                             key={0}
                />
                <ScenePairing id="scene-pairing"
                              onChangeComplete={ this.handleStylesChange }
                              activeSceneIndex={ this.props.activeSceneIndex }
                              colorNormal={ this.props.colorNormal }
                              colorFocused={ this.props.colorFocused }
                              colorDisabled={ this.props.colorDisabled }
                              focus={ this.props.focus }
                              logoBackgroundStyle={ this.props.logoBackgroundStyle }
                              index={1}
                              key={1}
                />
                <SceneConfiguration id="scene-configuration"
                                    onChangeComplete={ this.handleStylesChange }
                                    activeSceneIndex={ this.props.activeSceneIndex }
                                    colorNormal={ this.props.colorNormal }
                                    colorFocused={ this.props.colorFocused }
                                    colorDisabled={ this.props.colorDisabled }
                                    focus={ this.props.focus }
                                    index={2}
                                    key={2}
                />
                <SceneCurrently id="scene-currently"
                                onChangeComplete={ this.handleStylesChange }
                                activeSceneIndex={ this.props.activeSceneIndex }
                                colorNormal={ this.props.colorNormal }
                                colorFocused={ this.props.colorFocused }
                                colorDisabled={ this.props.colorDisabled }
                                focus={ this.props.focus }
                                index={3}
                                key={3}
                />
                <SceneRecordings id="scene-recordings"
                                 onChangeComplete={ this.handleStylesChange }
                                 activeSceneIndex={ this.props.activeSceneIndex }
                                 colorNormal={ this.props.colorNormal }
                                 colorFocused={ this.props.colorFocused }
                                 colorDisabled={ this.props.colorDisabled }
                                 focus={ this.props.focus }
                                 index={4}
                                 key={4}
                />
                <SceneEPG id="scene-epg"
                          onChangeComplete={ this.handleStylesChange }
                          activeSceneIndex={ this.props.activeSceneIndex }
                          colorNormal={ this.props.colorNormal }
                          colorFocused={ this.props.colorFocused }
                          colorDisabled={ this.props.colorDisabled }
                          focus={ this.props.focus }
                          index={5}
                          key={5}
                />
                <SceneMenu id="scene-menu"
                           onChangeComplete={ this.handleStylesChange }
                           activeSceneIndex={ this.props.activeSceneIndex }
                           colorNormal={ this.props.colorNormal }
                           colorFocused={ this.props.colorFocused }
                           colorDisabled={ this.props.colorDisabled }
                           focus={ this.props.focus }
                           index={6}
                           key={6}
                />
                <RCButtons
                    activeSceneIndex={ this.props.activeSceneIndex }
                />
            </div>
        );
    }
}