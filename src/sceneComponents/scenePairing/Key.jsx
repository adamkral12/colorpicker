import React from 'react';
import Button from '../../core/Button';
import classNames from 'classnames';
import update from 'react-addons-update';

export default class Key extends Button {

    constructor(props) {
        super(props);
        this.state.disabable = this.state.normal = false;
    }

    render() {
        const styles = this.getStyles();
    //    console.log('key will mount = ' + this.shouldComponentUpdate(this.props, this.state).toString() + ', state = ' + JSON.stringify(this.state) + ", props = " + JSON.stringify(this.props));

        let iconSpan = <span className="content keyboard"
                             style={ this.shouldComponentUpdate(this.props, this.state) ? styles.color : {} }
                        > { this.props.text }
                        </span>;

        if (this.props.icon) {
            const classes = classNames("content keyboard", this.props.icon );
            iconSpan = <span className={ classes }
                             style={ this.shouldComponentUpdate(styles, this.state) ? styles.color : {} }
                        />;
        }
        return(
            <span className="key">
                { iconSpan }
            </span>
        )
    }
}