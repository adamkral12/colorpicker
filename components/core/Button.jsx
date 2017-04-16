import classNames from '../../bundler/node_modules/classnames';

/*
    Abstract Button component
    needs Props:
        className
        dataValue
        text = innerHTML
        optional iconClassName

 */

export default class Button extends React.Component {

    renderIcon() {
        if (this.props.iconClassName) {
            return <span className={this.props.iconClassName}></span>;
        } else {
            return '';
        }
    }

    render () {
        var classes = classNames('buttons focusable', this.props.className);

        return (
        <li className={classes} data-value={this.props.dataValue}>
            {this.renderIcon()}
            <div className="text">{this.props.text}</div>
        </li>
        );
    }

}