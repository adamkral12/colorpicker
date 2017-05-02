import React from 'react';
import OnlyFocusButton from '../../core/OnlyFocusButton';
import classNames from 'classnames';

export default class Key extends OnlyFocusButton {

    render() {
        const styles = this.getCSS(this.props.colorFocused);

        let iconSpan = <span className="content keyboard"
                             style={ this.state.hover ? styles.color : {} }
                        > { this.props.text }
                        </span>;

        if (this.props.icon) {
            const classes = classNames("content keyboard", this.props.icon );
            iconSpan = <span className={ classes }
                             style={ this.state.hover ? styles.color : {} }
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