import React from 'react';
import Button from '../../core/Button';
import classNames from 'classnames';

export default class Key extends Button {

    render() {
        const styles = this.getCSS(this.props.colorFocused);

        let iconSpan = <span className="content keyboard"
                             style={ this.state.hover ? styles.color : { color: this.getCSS(this.props.colorNormal).color.color } }
                        > { this.props.text }
                        </span>;

        if (this.props.icon) {
            const classes = classNames("content keyboard", this.props.icon );
            iconSpan = <span className={ classes }
                             style={ this.state.hover ? styles.color : { color: this.getCSS(this.props.colorNormal).color.color }  }
                        />;
        }
        return(
            <span className="key"
                  onMouseOver={ this.mouseOver }
                  onMouseOut={ this.mouseOut }
            >
                { iconSpan }
            </span>
        )
    }
}