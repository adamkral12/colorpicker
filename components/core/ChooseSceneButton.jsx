import classNames from '../../bundler/node_modules/classnames';
export default class ChooseSceneButton extends React.Component {
    constructor(props) {
        super(props);
    };


    click() {
        this.props.onClick(this.props.index);
    }


    render() {
        let classes = classNames('choose-button', {selected: this.props.selected ? 'selected' : ''});
        return (
            <div className={classes}
                 index={this.props.index}
                 onClick={this.click.bind(this)}>
                 {this.props.text}
            </div>
        );
    }
}