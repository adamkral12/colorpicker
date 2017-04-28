import React from 'react';
import Scene from '../core/Scene';
import Panelheader from '../sceneComponents/sceneConfiguration/PanelHeader';
import TableCurrentlyRow from '../sceneComponents/sceneCurrently/TableCurrentlyRow';

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

                                    <div className="pages">1/3</div>

                                    <table className="tb-curlist">
                                        <tbody>
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="HBO 3"
                                                epg="John Oliver"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="Eurosport 2"
                                                epg="Snooker"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="Discovery"
                                                epg="Animals"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="FilmBox"
                                                epg="Sonny boy"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="Golf Channel"
                                                epg="RBC Heritage"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="Cartoon Network"
                                                epg="Xiaolin Chronicles (120)"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="Disney Channel"
                                                epg="Star Darlings (1)"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="History Channel"
                                                epg="Danny's cars"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="AMC"
                                                epg="Chitty chitty bang bang"
                                            />
                                            <TableCurrentlyRow
                                                color={ this.props.color }
                                                colorFocused={ this.props.colorFocused }
                                                name="Fishing&Hunting"
                                                epg="Ultimate Fishing Show"
                                            />
                                        </tbody>
                                    </table>

                </div>
            </div>
        )
    }
}