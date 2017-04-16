import Scene from '../core/Scene.jsx'
export default class SceneStream extends Scene {

    constructor(props) {
        super(props);
        this.id = ' scene-stream';
    }

    componentWillMount() {
        super.componentWillMount();
    }

    render () {
        return (
            <div id="scene-stream">

                <div id="snippet-player">

                    <div class="locked">
                        <div class="error-head"></div>
                        <div class="error-body"></div>
                    </div>


                    <div class="errorMsg">
                        <p></p>
                    </div>

                    <div class="pinError">
                        <div class="error-head"></div>
                        <div class="error-body"></div>
                    </div>

                    <div id="ch-name-container">
                        <div class="opaque"></div>
                        <div id="ch-name"></div>
                    </div>

                    <div id="ch-num-container">
                        <div class="opaque"></div>
                        <div id="ch-num">---</div>
                    </div>

                    <div class="player">

                        <div class="content">
                            <div class="bar">
                                <div class="progress clickable" data-value="progress"></div>
                                <div class="actual"></div>
                            </div>
                            <div class="channel-number"><div class="text"></div></div>
                            <table>
                                <tr>
                                    <td class="channels channel1"></td>
                                    <td class="titles title1"><div></div></td>
                                    <td class="time time1"></td>
                                </tr>
                                <tr class="secondRow">
                                    <td class="channels channel2"></td>
                                    <td class="titles title2"><div></div></td>
                                    <td class="time time2"></td>
                                </tr>
                            </table>
                            <ul class="buttons">
                                <li class="buttons focusable button-play" data-value="play"><span class="icon-play3"></span><div class="text"></div></li>
                                <li class="buttons focusable button-pause" data-value="pause"><span class="icon-pause2"></span><div class="text"></div></li>
                                <li class="buttons focusable button-back" data-value="start"><span class="icon-previous2"></span><div class="text"></div></li>
                                <li class="buttons focusable button-record" data-value="record"><div class="record"></div><div class="text"></div></li>
                                <li class="buttons focusable button-live" data-value="live"><span class="icon-play3"></span><div class="text"></div></li>
                                <li class="buttons focusable button-previous" data-value="prev"><span class="icon-backward2"></span><div class="text"></div></li>
                                <li class="buttons focusable button-next" data-value="next"><span class="icon-forward3"></span><div class="text"></div></li>
                            </ul>
                            <div class="logo"></div>
                        </div>

                        <div id="timeframe" class="focusable">
                            <div class="icon-timeframe">
                                <span class="time"></span>
                                <span class="path1"></span>
                                <span class="path2"></span>
                            </div>
                        </div>

                        <div class="opaque"></div>

                    </div>

                </div>
                <div class="snippet-rc-buttons rc-buttons">
                    <table>
                        <tr>
                        </tr>
                    </table>
                </div>

                <div class="snippet" id="snippet-stream-error">
                    <div class="error-head"></div>
                    <div class="error-body"></div>
                </div>

            </div>
        );
    }
}