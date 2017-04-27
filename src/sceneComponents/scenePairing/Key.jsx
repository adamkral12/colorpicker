import React from 'react';
import Button from '../../core/Button';
import classNames from 'classnames';
import update from 'react-addons-update';

export default class Key extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = this.state.normal = false;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.hover === !nextState.hover;
    }

    render() {
        const styles = this.getStyles();
        console.log('key will mount = ' + this.shouldComponentUpdate(this.props, this.state).toString() + ', styles = ' + JSON.stringify(styles));

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