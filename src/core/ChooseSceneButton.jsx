import classNames from 'classnames';
export default class ChooseSceneButton extends React.Component {


    click() {
        this.props.onClick(this.props.index);
    }


    render() {
        let classes = classNames('choose-button', {selected: this.props.selected ? 'selected' : ''});
        return (
            <div className={classes}
                 onClick={this.click.bind(this)}>
                 {this.props.text}
            </div>
        );
    }
}