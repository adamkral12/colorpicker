export default class SeekBar extends React.Component {
    render() {
        return (
            <div className="bar">
                <div className="progress clickable" data-value="progress"></div>
                <div className="actual"></div>
            </div>
        );
    }
}