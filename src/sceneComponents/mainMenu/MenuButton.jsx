import React from 'react';
import Button from '../../core/Button';
import classNames from 'classnames';

export default class MenuButton extends Button {


    renderPaths() {
        let paths = [];
        const styles = this.getStyles();

        for(let i =1; i <= this.props.numberOfPaths; i++ ) {
            let classes = "path path" + i;
            if (i === 1) {
                paths.push(<span className={ classes } style={ {color : styles.color.background} } /> );
            } else {
                paths.push(<span className={ classes } /> );
            }
        }

        return paths;
    }

    render() {
        const classes = classNames('item focusable', this.props.classes );

        return(
            <li className={ classes }
            >
                { this.renderPaths() }

                <div className="wrapper">
                    <div className={ this.props.wrapperClass }
                    >
                        { this.props.wrapperText }
                    </div>
                </div>
            </li>
        )
    }
}