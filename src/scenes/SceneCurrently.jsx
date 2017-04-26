import React from 'react';
import Scene from '../core/Scene';
import Panelheader from '../sceneComponents/sceneConfigurationComponents/PanelHeader';

export default class SceneCurrently extends Scene {
    render() {
        this.state.hidden = !this.isSceneActive();

        return (
            <div id="scene-currently"
                 className="scene"
                 style={ this.state.hidden ? { display: 'none'} : { display: "block" } }
            >

                <div className="opaque"></div>

                <Panelheader
                    text="CURRENTLY"
                    color={ this.props.color }
                    focus={ this.props.focus }
                />

                <div id="snippet-curlist">
                                    <div className="currentlyArrow clickable disabled" id="curArrowLeft">
                                        <span className="arrow arrow-left icon-arrow-left"/>
                                    </div>
                                    <div className="currentlyArrow clickable disabled" id="curArrowRight">
                                        <span className="arrow arrow-right icon-arrow-right"/>
                                    </div>
                                    <div className="currentlyArrow clickable" id="curArrowUp">
                                        <span className="arrow arrow-up icon-arrow-up"/>
                                    </div>
                                    <div className="currentlyArrow clickable" id="curArrowDown">
                                        <span className="arrow arrow-down icon-arrow-bottom"/>
                                    </div>

                                    <div className="opaque-scroll"></div>

                                    <div className="pages"></div>

                                    <table className="tb-curlist">
                                        <tbody>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">HBO 3</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">Eurosport 2</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">Discovery</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">FilmBox</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">Golf Channel</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">Cartoon Network</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">Disney Channel</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable focus" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">History Channel</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">AMC</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                            <tr className="row focusable" data-value="">
                                                <td className="box px263 dark focus-blue name"><div className="chName">Fishing&Hunting</div></td>
                                                <td className="box px437 dark focus-blue epg"><div></div></td>
                                            </tr>
                                        </tbody>
                                    </table>

                </div>
            </div>
        )
    }
}