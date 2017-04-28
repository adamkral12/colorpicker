import React from 'react';
import Button from '../../core/Button';
import classNames from 'classnames';

export default class MenuButton extends Button {


    renderPaths() {
        let paths = [];
        const styles = this.getStyles();
        console.log('Menu button colorfocused = ' + JSON.stringify(this.getCSS(this.props.colorFocused)) + ', hover = ' + this.state.hover);

        for(let i =1; i <= this.props.numberOfPaths; i++ ) {
            let classes = "path path" + i;
            if (i === 1) {
                paths.push(<span className={ classes } style={ this.state.hover ? { color: this.getCSS(this.props.colorFocused).color.background } :  {color : styles.color.background} } /> );
            } else {
                paths.push(<span className={ classes } /> );
            }
        }

        return paths;
    }

    render() {
        const classes = classNames('item focusable', this.props.classes );
        const styles = this.getStyles();
        console.log('font = ' + JSON.stringify(styles.color));
        return(
            <li className={ classes }
                onMouseOver={ this.mouseOver }
                onMouseOut={ this.mouseOut }
            >
                { this.renderPaths() }

                <div className="wrapper">
                    <div className={ this.props.wrapperClass }
                         style={ {color: styles.color.color} }
                    >
                        { this.props.wrapperText }
                    </div>
                </div>
            </li>
        )
    }
}